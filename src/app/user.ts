import { SingleTwitch } from './single-twitch';
import * as moment from 'moment';
import { TwitcherService } from './twitcher.service';

export class User {
  followStatus = 'Follow';
  firstName;
  lastName;
  username;
  profilePhoto;
  singleTwitch;
  userId = Math.random() * 2;


  constructor(private twitchService: TwitcherService) {}

  twitches = [];

  followers = [];
  following = [];
  likedTwitches = [];

  twitch(twitch, particularUser) {
    const date = new Date();

    const twitchId = Math.random() * 2;
    const twitchDate = moment(date).fromNow(true);

    this.singleTwitch = new SingleTwitch(
      twitch.value,
      twitchId,
      twitchDate,
      particularUser
    );
    // getMessage(this.singleTwitch);
    this.twitches.unshift(this.singleTwitch);
  }

  addToLikes(particularTwitch) {
    if (this.likedTwitches.includes(particularTwitch)) {
      this.likedTwitches = this.likedTwitches.filter(m => {
        return m !== particularTwitch;
      });
    } else {
      this.likedTwitches.push(particularTwitch);
    }
  }

  follow(selectedUser, particularUser) {
    if (this.following.includes(selectedUser)) {
      this.following = this.following.filter(followedUser => {
        return followedUser !== selectedUser;
      });
      this.followStatus = 'Follow';
    } else {
      this.following.push(selectedUser);
      this.followStatus = 'Following';
    }

    if (selectedUser.followers.includes(particularUser)) {
      selectedUser.followers = selectedUser.followers.filter(followingUser => {
        return followingUser !== particularUser;
      });
    } else {
      selectedUser.followers.push(particularUser);
    }
  }
}

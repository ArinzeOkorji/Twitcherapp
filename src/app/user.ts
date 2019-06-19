import { SingleTwitch } from './single-twitch';
import * as moment from 'moment';

export class User {
  followStatus = 'Follow';
  firstName;
  lastName;
  username;
  profilePhoto;
  singleTwitch;
  userId = Math.random() * 2;

  constructor() {
  }

  twitches = [];

  followers = [];
  following = [];
  likedTwitches = [];

  twitch(twitch, particularUser) {
    let date = new Date();

    let twitchId = Math.random() * 2;
    let twitchDate = moment(date).fromNow(true);


    this.singleTwitch = new SingleTwitch(twitch.value, twitchId, twitchDate, particularUser);
    //getMessage(this.singleTwitch);
    this.twitches.unshift(this.singleTwitch);

  }

  addToLikes(particularTwitch) {
    if(this.likedTwitches.includes(particularTwitch)) {

      this.likedTwitches = this.likedTwitches.filter(m => {
        return m !== particularTwitch;
      });
    } else {
      this.likedTwitches.push(particularTwitch);
    }

  }

  follow(selectedUser) {
    if (this.following.includes(selectedUser)) {
      this.following = this.following.filter(followedUser => {
        return followedUser !== selectedUser;
      });
      this.followStatus = 'Follow';
    } else {
      this.following.push(selectedUser);
      this.followStatus = 'Following';
    }
  }




}

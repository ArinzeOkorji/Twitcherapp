import { SingleTwitch } from './single-twitch';
import * as moment from 'moment';

export class User {
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




}

import { Component, OnInit, Input, IterableDiffers, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TwitcherService } from '../twitcher.service';
import { TwitchComponent } from '../twitch/twitch.component';
import { forEach } from '@angular/router/src/utils/collection';
// import { ComposetwitchComponent } from '../composetwitch/composetwitch.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ TwitchComponent ]
})
export class HomeComponent implements OnInit, DoCheck {

  unliked = true;
  liked = false;
  twitchService;
  user;
  router;
  particularTwitch;
  twitch;
  homeTwitches = [];
  myTwitches = [];

  differ1: any;
  differ2: any;
  particularUserTwitches: any;
  change: any;
  particularUserFollowers: any;
  followingUser: any;

  constructor(differs: IterableDiffers, twitchService: TwitcherService, router: Router, twitch: TwitchComponent) {
    this.twitchService = twitchService;
    this.router = router;
    this.twitch = twitch;

    this.differ1 = differs.find([]).create(null);
   // this.differ2 = differs.find([]).create(null);

    @Input() this.particularUserTwitches = this.twitchService.particularUser.twitches;

    /* for (let i = 0; i <= this.twitchService.particularUser.following.length; i++) {
      console.log(this.twitchService.particularUser.following[i].twitches)
    @Input() this.particularUserFollowers = this.twitchService.particularUser.following[i].twitches;
    } */

    //@Input() this.particularUserFollowers = this.twitchService.particularUser.following[0].twitches;
   }



  ngOnInit() {

    /* this.twitchService.homeTwitchesSource.next();

    this.twitchService.homeTwitches.subscribe(homeTwitches => {

      console.log(this.homeTwitches);
    }); */
  }

  ngDoCheck() {
    this.change = this.differ1.diff(this.particularUserTwitches);
   // this.followingUser = this.differ2.diff(this.particularUserFollowers);

    console.log(this.change);
    console.log(this.change._additionsHead.item);

    console.log(this.homeTwitches)

    for (let i = 0; i <= this.change.collection.length - 1; i++) {
      this.homeTwitches.push(this.change.collection[i]);

      console.log(this.homeTwitches)
    }
    /* for (let i = 0; i <= this.followingUser.collection.length - 1; i++) {
      this.homeTwitches.push(this.followingUser.collection[i]);

      console.log(this.homeTwitches)
    } */

    console.log(this.change.collection[0]);
    // console.log(this.followingUser.collection[0]);

     // return this.homeTwitches.unshift(this.change._additionsHead.item);

  }

  like() {
    this.unliked = !this.unliked;
    this.liked = !this.liked;
  }

  showTwitch(particularTwitch) {
    this.particularTwitch = particularTwitch;
    // this.twitch.particularTwitch = particularTwitch;
    // console.log(this.twitch.particularTwitch.message.twitchField);

    this.twitchService.displaySelectedTwitch(particularTwitch);

    /* if(particularTwitch.message.twitchField === undefined) {
      console.log('go');
      return;
    } */

      this.router.navigateByUrl('/twitchInfo');

  }

  reply(particularTwitch: {}, particularUser: {}) {
        console.log(particularTwitch);
        let theParticularTwitch = particularTwitch;
        this.twitchService.displaySelectedTwitch(particularTwitch);
        // theParticularTwitch.listOfTwitchCommenters.unshift(particularUser);




    this.twitchService.particularTwitchContainer = !undefined;
    this.router.navigateByUrl('/compose-twitch');

  }

  composeTwitch() {
    this.twitchService.particularTwitchContainer = undefined;
    this.router.navigateByUrl('/compose-twitch');
  }
}

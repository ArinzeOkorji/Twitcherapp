import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TwitcherService } from '../twitcher.service';
import { TwitchComponent } from '../twitch/twitch.component';
// import { ComposetwitchComponent } from '../composetwitch/composetwitch.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ TwitchComponent ]
})
export class HomeComponent implements OnInit {
  unliked = true;
  liked = false;
  twitchService;
  user;
  router;
  particularTwitch;
  twitch;

  constructor(twitchService: TwitcherService, router: Router, twitch: TwitchComponent) {
    this.twitchService = twitchService;
    this.router = router;
    this.twitch = twitch;
   }

  ngOnInit() {
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

      this.router.navigateByUrl('/twitchInfo')

  }

  reply(particularTwitch: {}, particularUser: {}) {
        console.log(particularTwitch)
        let theParticularTwitch = particularTwitch;
        this.twitchService.displaySelectedTwitch(particularTwitch);
        // theParticularTwitch.listOfTwitchCommenters.unshift(particularUser);




    this.twitchService.particularTwitchContainer = !undefined;
    this.router.navigateByUrl('/compose-twitch')

  }

  composeTwitch() {
    this.twitchService.particularTwitchContainer = undefined;
    this.router.navigateByUrl('/compose-twitch')
  }
}

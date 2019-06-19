import { Component, OnInit, Input } from '@angular/core';
import { TwitcherService } from '../twitcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-twitches-section',
  templateUrl: './user-twitches-section.component.html',
  styleUrls: ['./user-twitches-section.component.scss']
})
export class UserTwitchesSectionComponent implements OnInit {
  @Input() displayedTwitches;

  twitchService;
  router;
  particularTwitch;

  constructor(twitchService: TwitcherService, router: Router) {
    this.twitchService = twitchService;
    this.router = router;
  }

  ngOnInit() {
  }

  reply(particularTwitch: {}, particularUser: {}) {
    console.log(particularTwitch)
    let theParticularTwitch = particularTwitch;
    this.twitchService.displaySelectedTwitch(particularTwitch);
    // theParticularTwitch.listOfTwitchCommenters.unshift(particularUser);




this.twitchService.particularTwitchContainer = !undefined;
this.router.navigateByUrl('/compose-twitch')

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

}

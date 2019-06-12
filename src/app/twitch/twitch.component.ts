import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TwitcherService } from "../twitcher.service";

@Component({
  selector: "app-twitch",
  templateUrl: "./twitch.component.html",
  styleUrls: ["./twitch.component.scss"]
})
export class TwitchComponent implements OnInit {
  twitchService;
  router;

  particularTwitch;
  homeComponent;

  constructor(twitchService: TwitcherService, router: Router) {
    this.twitchService = twitchService;
    this.router = router;
  }

  ngOnInit() {
    this.twitchService.selectedTwitch.subscribe(
      selectedTwitch => (this.particularTwitch = selectedTwitch)
    );

    console.log(this.twitchService.particularTwitch.message.twitchField + 1);
  }

  reply(particularTwitch: {}, particularUser: {}) {
    console.log(particularTwitch);
    let theParticularTwitch = particularTwitch;
    this.twitchService.displaySelectedTwitch(particularTwitch);
    // theParticularTwitch.listOfTwitchCommenters.unshift(particularUser);

    this.twitchService.particularTwitchContainer = !undefined;
    this.router.navigateByUrl("/compose-twitch");
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

    this.router.navigateByUrl("/twitchInfo");
  }
}

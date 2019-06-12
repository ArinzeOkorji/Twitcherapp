import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitcherService } from '../twitcher.service';
import { from } from 'rxjs';
import { SingleTwitch } from '../single-twitch';
import * as moment from 'moment';
import { User } from '../user';



@Component({
  selector: 'app-composetwitch',
  templateUrl: './composetwitch.component.html',
  styleUrls: ['./composetwitch.component.scss'],
  // providers: [ SingleTwitch ],
})
export class ComposetwitchComponent implements OnInit {

  twitchService;
  router;
  singleTwitch: SingleTwitch;
  // particularTwitch;

  constructor(twitchService: TwitcherService, router: Router) {
    this.twitchService = twitchService;
    this.router = router;
  }

  ngOnInit() {
    this.twitchService.selectedTwitch.subscribe((selectedTwitch) => {
      this.twitchService.particularTwitch = selectedTwitch;
    });
  }

  //submitTwitch(twitch) {

    /* let twitchId = Math.random() * 2;
    let twitchDate = moment(this.date).fromNow(true); */

    //this.singleTwitch = new SingleTwitch(twitch.value, twitchId, twitchDate);

    //const mySingleTwitch = this.singleTwitch;

    // this.twitchService.getMessage(mySingleTwitch);

    // this.user.twitch(twitch);

    // console.log(mySingleTwitch.message, mySingleTwitch.id, mySingleTwitch.messageTime);
    // console.log(twitch);



    // this.router.navigateByUrl('/home');
  //}

  backToHome() {
    /* let promise = new Promise(function(resolve,reject) {
      setTimeout(function(){
        resolve(this.twitchService.userId)
      }, 200)
    }) */
    // console.log(this.twitchService.particularUser);


    this.twitchService.particularTwitchContainer = undefined;
    this.router.navigateByUrl('/home');


  }

}

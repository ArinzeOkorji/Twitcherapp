import { Component, OnInit } from '@angular/core';
import { TwitcherService } from '../twitcher.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  twitchService;

  constructor( twitchService: TwitcherService) {
    this.twitchService = twitchService
   }

  ngOnInit() {
  }



}

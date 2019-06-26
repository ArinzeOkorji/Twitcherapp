import { Component, OnInit } from '@angular/core';
import { TwitcherService } from '../twitcher.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  twitchService;

  constructor(twitchService: TwitcherService) {
    this.twitchService = twitchService;
   }

  ngOnInit() {

    this.twitchService.userSearchResultsList = [];
  }

}

import { Component, OnInit } from '@angular/core';
import { TwitcherService } from "../twitcher.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  twitchService;
  selectedSection = [
    'Home'
  ];

  pageTitle = true;
  searchBox = false;


  constructor(twitchService: TwitcherService) {
    this.twitchService = twitchService;
   }

  ngOnInit() {
  }

  selectSection(section) {
    this.selectedSection = [];

    this.selectedSection.push(section);

    if(section !== 'Search') {
      this.pageTitle = true;
      this.searchBox = false;
    } else {
      this.pageTitle = false;
      this.searchBox = true;
    }

  }
}

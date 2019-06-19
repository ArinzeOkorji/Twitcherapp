import { Component, OnInit } from '@angular/core';
import { TwitcherService } from "../twitcher.service";
import { Router } from '@angular/router';


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

  sideMenu;

  pageTitle = true;
  searchBox = false;


  constructor(twitchService: TwitcherService, private router: Router) {
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

  toggleSideMenu() {
    this.sideMenu = !this.sideMenu;
  }

  logout() {
    this.twitchService.particularUser = null;

    this.router.navigateByUrl('/log-in');
  }
}

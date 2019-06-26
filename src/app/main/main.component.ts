import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TwitcherService } from "../twitcher.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('searchBoxStyle') searchBoxStyle: ElementRef;
  @ViewChild('searchField') searchField: ElementRef;
  twitchService;
  selectedSection = [
    'Home'
  ];

  sideMenu;

  pageTitle = true;
  searchBox = false;
  clearBtn = false;


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
      this.clearBtn = false;
    } else {
      this.pageTitle = false;
      this.searchBox = true;
    }

  }

  focusSearchField() {
    if (!(this.searchBoxStyle.nativeElement.style.backgroundColor === '#ffffff')) {
      this.searchBoxStyle.nativeElement.style.backgroundColor = '#ffffff';
      this.searchBoxStyle.nativeElement.style.borderWidth = '1px';
      this.searchBoxStyle.nativeElement.style.borderColor = 'blue';
      this.searchBoxStyle.nativeElement.style.borderStyle = 'solid';
    } else {
      this.searchBoxStyle.nativeElement.style.backgroundColor = '#d4d3d3';
      this.searchBoxStyle.nativeElement.style.border = 'none';
    }
  }

  consoles(event) {

    console.log(event.target.value.length);

    if (event.target.value.length >= 1) {
      this.clearBtn = true;
    } else {
      this.clearBtn = false;
    }
  }


  toggleSideMenu() {
    this.sideMenu = !this.sideMenu;
  }

  logout() {
    this.twitchService.particularUser = null;

    this.router.navigateByUrl('/log-in');
  }

  clearSearchField() {
    this.searchField.nativeElement.value = '';
    this.clearBtn = false;

    this.twitchService.userSearchResultsList = [];
  }

}

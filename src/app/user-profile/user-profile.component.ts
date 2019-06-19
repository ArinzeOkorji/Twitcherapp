import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TwitcherService } from '../twitcher.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  twitchService;
  routes;
  sub;
  handle;
  navigation = [
    {title : 'Twitches'},
    {title: 'Likes'},
    // {title: 'Comments'}
  ];
  navSectionTwitches;
  navSection = 'Twitches';


  selectedUser;


  constructor(twitchService: TwitcherService,routes: ActivatedRoute) {
    this.twitchService = twitchService;
    this.routes = routes;
   // this.navSectionTwitches = this.selectedUser.twitches;
   }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {

      this.handle = params['user-name'];



      this.twitchService.storedUserList.forEach(singleUser => {

        if(singleUser.handle === this.handle) {
          this.selectedUser = singleUser;
          console.log(this.selectedUser);
          this.navSectionTwitches = this.selectedUser.twitches;
        }
      });
    });


      // this.navSectionTwitches = this.selectedUser.twitches;

  }

  fetchTwitches(navTitle) {
    this.navSection = navTitle;
    this.navSectionTwitches = undefined;

    if(this.navSection === 'Twitches') {
      this.navSectionTwitches = this.selectedUser.twitches;
    } else if(this.navSection === 'Likes') {
      console.log(this.selectedUser.likedTwitches)
      this.navSectionTwitches = this.selectedUser.likedTwitches;
    }
  }



}

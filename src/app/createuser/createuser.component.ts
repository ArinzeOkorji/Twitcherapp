import { Component, OnInit } from '@angular/core';
import { TwitcherService } from '../twitcher.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
  twitchService;
  router;

  newUser;
  createdUserId;

  constructor(twitchService: TwitcherService, router: Router) {
    this.twitchService = twitchService;
    this.router = router;
   }

  ngOnInit() {
  }

  createUser(userDetails) {
    this.newUser = new User();
    this.newUser.firstname = userDetails.value.firstname;
    this.newUser.lastname = userDetails.value.lastname;
    this.newUser.password = userDetails.value.password;
    this.newUser.displayname = userDetails.value.displayname;
    this.newUser.handle = userDetails.value.handle;
    this.createdUserId = this.newUser.userId;
    console.log(this.newUser, this.createdUserId);
    this.twitchService.storeUser(this.newUser, this.createdUserId);

    this.router.navigateByUrl('/home');

    console.log(userDetails.value);
  }

}

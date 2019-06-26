import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TwitcherService {
  createdUserId;
  messageArray = [];
  storedUserList = [];
  userSearchResultsList = [];
  particularTwitch: Object;
  particularUser;
  particularTwitchContainer = undefined;
  /* particularUser =  this.storedUserList.find((user) => {
     return user.userId === this.createdUserId;
    }); */

    homeTwitchesSource = new BehaviorSubject('');
    homeTwitches = this.homeTwitchesSource.asObservable();

  selectedTwitchSource = new BehaviorSubject('');
  selectedTwitch = this.selectedTwitchSource.asObservable();

  displaySelectedTwitch(newSelectedTwitch) {
    this.selectedTwitchSource.next(newSelectedTwitch);
  }

  constructor(private router: Router) {}

  storeUser(user, userId) {
    this.createdUserId = userId;
    this.storedUserList.unshift(user);

    console.log(this.createdUserId);
    this.selectParticularUser(this.createdUserId);
  }

  selectParticularUser(myuser) {
    this.particularUser = this.storedUserList.find(user => {
      return user.userId === myuser;
    });
  }

  onSearch(event) {
    this.userSearchResultsList = [];
    /* this.userSearchResultsList.unshift(
      this.storedUserList.find(user => user.handle === event.target.value)
    );
    console.log(
      this.storedUserList.find(user => user.handle === event.target.value)
    ); */

    for (let i = 0; i <= this.storedUserList.length; i++) {
      const inputLength = event.target.value.length;
      const queryLimit = inputLength;

      let queryWord = this.storedUserList[i].handle.slice(0, queryLimit);
      let lowercaseQW = queryWord.toLowerCase();

      console.log(lowercaseQW);

      //let queryWord = queryLetters.join();

      if (lowercaseQW === event.target.value) {
        this.userSearchResultsList.unshift(this.storedUserList[i]);

        console.log(this.userSearchResultsList);
      }

      if (event.target.value === '') {
        this.userSearchResultsList = [];
      }
    }
  }

  /* getMessage(twitchMessage) {
    //const twitch = { message: twitchMessage };

    //this.messageArray.unshift(twitch);
    this.messageArray.unshift(twitchMessage);
    console.log(this.messageArray)
  } */

  login(loginDetails) {
    this.particularUser = this.storedUserList.find(user => {
      return (
        user.password === loginDetails.value.password &&
        user.handle === loginDetails.value.username
      );
    });

    if (this.particularUser) {
      this.router.navigateByUrl('/home');

    }
      else alert('Incorrect password');



  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ComposetwitchComponent } from './composetwitch/composetwitch.component';
import { TwitcherService } from './twitcher.service';
import { TwitchComponent } from './twitch/twitch.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTwitchesSectionComponent } from './user-twitches-section/user-twitches-section.component';
import { LogInComponent } from './log-in/log-in.component';
// import { SingleTwitch } from './single-twitch';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'messages', component: MessagesComponent},
  ]},
  {path: 'compose-twitch', component: ComposetwitchComponent},
  {path: 'sign-up', component: CreateuserComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'twitchInfo', component: TwitchComponent},
  {path: ':user-name', component: UserProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SearchComponent,
    MessagesComponent,
    NotificationsComponent,
    ComposetwitchComponent,
    TwitchComponent,
    CreateuserComponent,
    UserProfileComponent,
    UserTwitchesSectionComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    //FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TwitcherService,
    // SingleTwitch,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* constructor() {
    library.add(faCoffee);
  } */
}

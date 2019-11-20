import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { TutorCardHomeComponent } from './components/tutor-card-home/tutor-card-home.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/sign-in/sign-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NoiconimagePipe } from './pipes/noiconimage.pipe';
import { NobackgroundPipe } from './pipes/nobackground.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { HomeInfoComponent } from './components/shared/home-info/home-info.component';

import { FullCalendarModule } from '@fullcalendar/angular';

import { GoogleApiModule, GoogleApiService, GoogleAuthService, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig } from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = { 
  client_id: "929460386682-le18blljl6b3rutntl8asii4kfsb56ln.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  scope: ["https://www.googleapis.com/auth/userinfo.profile"].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NoimagePipe,
    ProfileComponent,
    SearchComponent,
    SearchBarComponent,
    TutorCardHomeComponent,
    SubjectCardComponent,
    SignUpComponent,
    LogInComponent,
    HomePageComponent,
    NoiconimagePipe,
    NobackgroundPipe,
    HomeInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FullCalendarModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  exports: [MatAutocompleteModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

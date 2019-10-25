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
  ],
  exports: [MatAutocompleteModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

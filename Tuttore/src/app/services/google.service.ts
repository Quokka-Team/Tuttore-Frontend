import {Injectable, NgZone} from "@angular/core";
import * as _ from "lodash";
import {GoogleAuthService} from "ng-gapi/lib/GoogleAuthService";
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  private user: GoogleUser = undefined;

  constructor(private googleAuthService: GoogleAuthService, private ngZone: NgZone, private route:Router) { }

  public setUser(user: GoogleUser): void {
    this.user = user;
  }

  public getCurrentUser(): GoogleUser {
    return this.user;
  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(GoogleService.SESSION_STORAGE_KEY);
    if (!token) {
        throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(GoogleService.SESSION_STORAGE_KEY);
  }

  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
    });
  }

  //TODO: Rework
  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(GoogleService.SESSION_STORAGE_KEY)
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(GoogleService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      console.log(res); //-------------------------------------------------------------------------------------------------------------------
      this.user = res;
      sessionStorage.setItem(
        GoogleService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );
      this.route.navigateByUrl("/home");
    });
  }

  private signInErrorHandler(err) {
    console.log("Hubo un error con el login de Google: ", err);
  }
}

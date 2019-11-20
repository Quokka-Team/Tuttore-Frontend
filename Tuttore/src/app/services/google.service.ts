import {Injectable, NgZone} from "@angular/core";
import * as _ from "lodash";
import {GoogleAuthService} from "ng-gapi/lib/GoogleAuthService";
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;
import { StudentModel } from 'src/app/models/student.model';
import { GoogleModel } from '../models/google.model';
import { TutorsService } from './tutors.service';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  private user: GoogleUser = undefined;
  private normalUser: StudentModel = new StudentModel;

  constructor(private googleAuthService: GoogleAuthService, private ngZone: NgZone, private route:Router, private userService:TutorsService) { }

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

  // ------------ Empieza Sign In ------------
  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
    });
  }
  
  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.user = res;
      sessionStorage.setItem(
        GoogleService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
      );

      // Meter aqui que si no es un correo @unal.edu.co se sale automáticamente

      // Ademas preguntar que pasa si la persona intenta entrar por ambos lados? lo deja sin importar la constraseña?

      // Meter si el usuario ya está registrado o no
      
      // if(this.userService.isRegistered(res.getBasicProfile().getEmail())){
      //   this.route.navigateByUrl("/home");
      // }else{
      //   this.route.navigateByUrl("/Google-sign-up");
      // }
      this.route.navigateByUrl("/Google-sign-up");
    });
  }

  private signInErrorHandler(err) {
    console.log("Hubo un error con el login de Google: ", err);
  }

  // ------------ Termina Sign In ------------


  // ------------ Empieza Sign Out ------------
  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(GoogleService.SESSION_STORAGE_KEY)
      this.route.navigateByUrl("/home-page");
    });
  }
  // ------------ Termina Sign Out ------------

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(GoogleService.SESSION_STORAGE_KEY));
  }


  public signUp(newUser:GoogleModel){

    this.normalUser.name = this.user.getBasicProfile().getGivenName();
    this.normalUser.lastName = this.user.getBasicProfile().getFamilyName();
    this.normalUser.email = this.user.getBasicProfile().getEmail();
    this.normalUser.image = this.user.getBasicProfile().getImageUrl();
    this.normalUser.career = newUser.career;
    this.normalUser.gpa = newUser.gpa;
    this.normalUser.phoneNumber = newUser.phoneNumber;

    console.log(this.normalUser);

    //return this.userService.signUp(this.normalUser);
    
    //Se envia al backend this.normalUser y se responde con el token
  }
}

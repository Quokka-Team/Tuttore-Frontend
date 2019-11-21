import {Injectable, NgZone} from "@angular/core";
import * as _ from "lodash";
import {GoogleAuthService} from "ng-gapi/lib/GoogleAuthService";
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;
import { StudentModel } from 'src/app/models/student.model';
import { GoogleModel } from '../models/google.model';
import { TutorsService } from './tutors.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  private user: GoogleUser = undefined;
  private normalUser: StudentModel = new StudentModel;
  private userType:string;

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

      let email = res.getBasicProfile().getEmail();
      console.log(res.getAuthResponse().id_token);

      if(this.emailVerification(email)){

        this.userService.typeStudent(email).subscribe((value:any) => {
          this.userType = value.type;
          if(value.type == "1"){

            Swal.fire({
              allowOutsideClick: false,
              type: 'info',
              text: 'Procesando solicitud'
            })
        
            Swal.showLoading();
            
            this.userService.signInGoogle(res.getAuthResponse().id_token, email).subscribe(
              async data => {
                console.log(data);
                await Swal.fire({
                  allowOutsideClick: false,
                  type: 'success',
                  text: 'Te has logueado correctamente',
                  timer: 1500,
                  showConfirmButton:false
                })
                console.log("ssssssssssssssssssssssssssssssssssssssssss");
                this.route.navigateByUrl("/home");
              },
              error => {
                console.log(res.getAuthResponse().id_token);
                console.log("0ooooooooooooooooooooooooooooooooooooooooooooooo");
                // this.errorSignOut();
                Swal.fire({
                  type: 'error',
                  title: 'Hubo un error',
                  text: error.error.message
                })
              }
            );
      
          }else if(value.type == "2"){
            this.errorSignOut();
            Swal.fire({
              allowOutsideClick: true,
              type: 'error',
              text: 'Este correo ya se encuentra registrado por otro método, por favor ingrese sus credenciales'
            })
          }else{
            this.route.navigateByUrl("/Google-sign-up");
          }
        },
        error => {
          this.errorSignOut();
          console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          Swal.fire({
            type: 'error',
            title: 'Hubo un error',
            text: error.error.message
          })
        });

      }else{
        this.errorSignOut();

        Swal.fire({
          allowOutsideClick: true,
          type: 'error',
          text: 'Debe utilizar un correo institucional de la Universidad Nacional de Colombia'
        })
      }

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

  public errorSignOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(GoogleService.SESSION_STORAGE_KEY)
      this.route.navigateByUrl("/sign-in");
    });
  }

  private normalSignOut(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(GoogleService.SESSION_STORAGE_KEY)
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

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Procesando solicitud'
    })

    Swal.showLoading();

    this.userService.signUpGoogle(this.normalUser , this.user.getAuthResponse().id_token).subscribe(
      async data => {
        await Swal.fire({
          allowOutsideClick: false,
          type: 'success',
          text: 'Te has registrado correctamente, accediendo...',
          timer: 1500,
          showConfirmButton:false
        })
        
        this.userService.signInGoogle(this.user.getAuthResponse().id_token, this.user.getBasicProfile().getEmail()).subscribe(
          async data => {
            this.route.navigateByUrl("/home");
          },
          error => {
            this.errorSignOut();
            console.log("Hubo un error", error);
          }
        );
      },
      error => {
        this.errorSignOut();
        Swal.fire({
          type: 'error',
          title: 'Hubo un error',
          text: error.error.message
        })
      }
    );
  }

  private emailVerification(email:string){
    let aux = 0;
    for(let i = 0; i < email.length; i++){
      if(email.charAt(i)=="@"){
        aux = i;
      }
    }
    let compare = email.substring(aux,email.length);
    if(compare == "@unal.edu.co"){
      return true;
    }else{
      return false;
    }
  }
  
  public getType(){
    return this.userType;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TutorsService } from '../services/tutors.service';
import { GoogleService } from '../services/google.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor( private auth:TutorsService, private route:Router, private googleAuth:GoogleService){ }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()==false && this.googleAuth.isUserSignedIn()==false){
      return true;
    }else{
      console.log("El usuario ya esta logueado en su cuenta");
      this.route.navigateByUrl("/home");
      return false;
    }
  }
  
}

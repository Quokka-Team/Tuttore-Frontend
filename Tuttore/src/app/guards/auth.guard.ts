import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TutorsService } from '../services/tutors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:TutorsService, private route:Router){ }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()){
      return true;
    }else{
      console.log("El usuario no ha ingresado a su cuenta");
      this.route.navigateByUrl("/home-page");
      return false;
    }
  }
  
}
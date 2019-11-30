import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TutorsService } from '../services/tutors.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor( private auth:TutorsService, private route:Router){ }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()==false){
      return true;
    }else{
      console.log("El usuario ya esta logueado en su cuenta");
      this.route.navigateByUrl("/home");
      return false;
    }
  }
  
}

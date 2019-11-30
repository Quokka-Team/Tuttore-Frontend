import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GoogleService } from '../services/google.service';
import { TutorsService } from '../services/tutors.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleGuard implements CanActivate {

  constructor(private route:Router, private googleService:GoogleService){ }

  canActivate(): boolean{
    
    if(this.googleService.getCurrentUser()==undefined || this.googleService.getType()=="1" || this.googleService.getType()=="2"){
      this.googleService.signOut();
      return false;
    }

    if(this.googleService.isUserSignedIn()){
      return true;
    }else{
      this.route.navigateByUrl("/sign-in");
      return false;
    }
  }
  
}

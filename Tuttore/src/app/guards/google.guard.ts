import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GoogleService } from '../services/google.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleGuard implements CanActivate {

  constructor(private route:Router, private googleAuth:GoogleService){ }

  canActivate(): boolean{
    
    //Añadir funcion que me diga si ya está registrado o no (Si no está registrado deja, de otra forma)
    if(this.googleAuth.getCurrentUser()==undefined){
      this.googleAuth.signOut();
      return false;
    }

    if(this.googleAuth.isUserSignedIn()){
      return true;
    }else{
      this.route.navigateByUrl("/sign-in");
      return false;
    }
  }
  
}

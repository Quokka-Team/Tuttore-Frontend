import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { GoogleService } from '../../services/google.service';
import { GoogleModel } from 'src/app/models/google.model';


@Component({
  selector: 'app-google-sign-up',
  templateUrl: './google-sign-up.component.html',
  styleUrls: ['./google-sign-up.component.css']
})
export class GoogleSignUpComponent implements OnInit {

  newGoogleUser:GoogleModel;

  constructor(private route: Router, private googleService: GoogleService) { }

  ngOnInit() {
    this.newGoogleUser = new GoogleModel();
  }

  onSubmit(f: NgForm) {
    if(f.invalid){
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Procesando solicitud'
    })

    Swal.showLoading();
    this.newGoogleUser.career = this.newGoogleUser.career;
    console.log(this.newGoogleUser)

    this.googleService.signUp(this.newGoogleUser).subscribe(
      async data => {
        await Swal.fire({
          allowOutsideClick: false,
          type: 'success',
          text: 'Te has logueado correctamente',
          timer: 1500,
          showConfirmButton:false
        })
        this.route.navigateByUrl("/home");
      },
      error => {
        Swal.fire({
          type: 'error',
          title: 'Hubo un error',
          text: error.error.message
        })
      }
    );    
  }

  logOut() {
    this.googleService.signOut();
    this.route.navigateByUrl("/sign-in");
  }

}

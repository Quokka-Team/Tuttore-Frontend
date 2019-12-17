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
    this.googleService.signUp(this.newGoogleUser)
  }

  logOut() {
    this.googleService.errorSignOut();
  }

}

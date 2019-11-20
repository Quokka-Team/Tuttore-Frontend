import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { TutorsService } from 'src/app/services/tutors.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class LogInComponent implements OnInit {

  incomingStudent: StudentModel;

  constructor(private tutorsService: TutorsService, private route:Router) {}
  ngOnInit() {
    this.incomingStudent = new StudentModel();
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
    this.incomingStudent.career = this.incomingStudent.carrer;
    console.log(this.incomingStudent)
    this.tutorsService.signIn(this.incomingStudent).subscribe(
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

  onSignIn(googleUser) {
    console.log("Hola");
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  
}
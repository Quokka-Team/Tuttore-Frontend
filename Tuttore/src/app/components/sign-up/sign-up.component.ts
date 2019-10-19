import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { TutorsService } from '../../services/tutors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit{

  newStudent: StudentModel;


  constructor( private auth:TutorsService, private route:Router ) { 

  }

  ngOnInit() {
    this.newStudent = new StudentModel();
  }

  onSubmit() {

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Procesando solicitud'
    })

    Swal.showLoading();

    this.auth.signUp(this.newStudent).subscribe( async res => {
      await Swal.fire({
        allowOutsideClick: false,
        type: 'success',
        text: 'Se le ha enviado un email a su correo para validar su cuenta',
      })
      this.route.navigateByUrl("/log-in");
    }, err => {
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        text: err.error.message,
      })
    });
  }
}

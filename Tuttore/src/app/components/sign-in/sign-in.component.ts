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
<<<<<<< HEAD
    this.incomingStudent.career = this.incomingStudent.career;
=======
    this.incomingStudent.career = this.incomingStudent.carrer;
    console.log(this.incomingStudent)
>>>>>>> master
    this.tutorsService.signIn(this.incomingStudent).subscribe(
      async data => {
        await Swal.fire({
          allowOutsideClick: false,
          type: 'success',
          text: 'Se has logueado correctamente',
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
}
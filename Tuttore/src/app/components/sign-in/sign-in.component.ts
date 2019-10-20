import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { TutorsService } from 'src/app/services/tutors.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  onSubmit() {
    // console.log(this.incomingStudent);
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Procesando solicitud'
    })

    Swal.showLoading();

    this.tutorsService.signIn(this.incomingStudent).subscribe(
      async data => {
        await Swal.fire({
          allowOutsideClick: false,
          type: 'success',
          text: 'Se ha logueado correctamente',
          timer: 1500,
          showConfirmButton:false
        })
        //console.log(data.message);
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

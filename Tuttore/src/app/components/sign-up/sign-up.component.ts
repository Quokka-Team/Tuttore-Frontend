import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { TutorsService } from '../../services/tutors.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit{

  newStudent: StudentModel;
  careers: any [];

  constructor( private tutorService:TutorsService, private route:Router, private googleService:GoogleService ) { 

  }

  ngOnInit() {
    this.newStudent = new StudentModel();

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
    this.tutorService.getVerificationCode(this.newStudent.email).subscribe(  res => {
      console.log(res);
      


      Swal.fire({
        allowOutsideClick: false,
        type: 'info',
        input: "text",
        text: "Ingrese el codigo de verificacion que se enviado a su correo",
        inputAttributes: {
          maxlength: '6'  
        }
      }).then((result) => {
        
        if (result.value) {
            if(result.value == res['code']){
              this.makeRegister();
            }
        }
    });


  },
     err => {
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        text: err.error.message,
      })
    }
    )
  }
   
  
  getCareers(){
    this.tutorService.getAllCareers().subscribe( (careers:any[]) => {
      this.careers = careers;
    })
  }

  private makeRegister(){

        // Meter imagen
     this.tutorService.signUp(this.newStudent).subscribe( async res => {
      Swal.fire({
        allowOutsideClick: false,
        type: 'success',
        text: 'Su cuenta se ha creado satisfactoriamente',
      })
      this.route.navigateByUrl("/sign-in");
    }, err => {
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        text: err.error.message,
      })
    });
  }

  signIn(){
    this.googleService.signIn();
  }
}

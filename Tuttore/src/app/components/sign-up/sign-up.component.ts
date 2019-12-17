import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { TutorsService } from '../../services/tutors.service';
import Swal from 'sweetalert2';

import { NgForm, FormControl } from '@angular/forms';
import { GoogleService } from '../../services/google.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SubjectsService } from "src/app/services/subjects.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit{

  newStudent: StudentModel;
  careers: any [];
  profileImage: File=null;
  options;
  courses = {};
  subjectSearched;
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  



  constructor( private tutorService:TutorsService,
    private subjectsService:SubjectsService, private route:Router, private googleService:GoogleService ) { 



  }

  ngOnInit() {
    this.newStudent = new StudentModel();
    this.getCareers();
  }

  onSubmit(f: NgForm) {

    
    if(f.invalid){
      return;
    }
    
    this.newStudent.email = this.newStudent.email + "@unal.edu.co"
    
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Procesando solicitud'
    })
    Swal.showLoading();
    console.log(this.newStudent)
    this.tutorService.getVerificationCode(this.newStudent.email).subscribe(  res => {

      console.log("code:",res['code']);
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
              Swal.fire({
                allowOutsideClick: false,
                type: 'info',
                text: 'Procesando solicitud'
              })
              Swal.showLoading();
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
      
      this.initializeSubjectsData(careers);
    })
  }

  private makeRegister(){
      
    this.tutorService.signUp(this.newStudent, this.profileImage);
  }

  signIn(){
    this.googleService.signIn();
  }

  onFileSelected(event){
    console.log(event);
    this.profileImage = <File> event.target.files[0];
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getData(value) {   
    this.newStudent.career = value;
  }

  private initializeSubjectsData(data: any[]) {
    for (let subject of data) {
      this.courses[subject._id] = subject.name;
    }
    console.log(this.courses)
    this.options = Object.values(this.courses);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { TutorsService } from '../../services/tutors.service';

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

    this.auth.signUp(this.newStudent).subscribe( res => {
      console.log("Succesful");
      this.route.navigateByUrl("/log-in");
    }, err => {
      console.log(err);
    });
  }
}

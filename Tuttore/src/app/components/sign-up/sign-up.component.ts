import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  newStudent: StudentModel;

  ngOnInit() {
    this.newStudent = new StudentModel();
  }
}

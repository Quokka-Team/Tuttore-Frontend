import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  incomingStudent: StudentModel;

  ngOnInit() {
    this.incomingStudent = new StudentModel();
  }

  onSubmit() {
    console.log(this.incomingStudent);
  }

}

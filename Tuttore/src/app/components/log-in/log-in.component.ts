import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';
import { TutorsService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  incomingStudent: StudentModel;


  constructor(private tutorsService: TutorsService) {}
  ngOnInit() {
    this.incomingStudent = new StudentModel();
  }

  onSubmit() {
    // console.log(this.incomingStudent);
    this.tutorsService.signIn(this.incomingStudent).subscribe(
      data => console.log(data),
      error => console.log(error.error.message)
    );
    
    
  }

}

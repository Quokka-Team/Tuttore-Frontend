import { Component, OnInit, Input } from '@angular/core';
import { StudentModel } from 'src/app/models/student.model';

@Component({
  selector: 'app-tutor-card-home',
  templateUrl: './tutor-card-home.component.html',
  styleUrls: ['./tutor-card-home.component.css']
})
export class TutorCardHomeComponent implements OnInit {

  @Input() tutor: StudentModel;
  constructor() { }

  ngOnInit() {
  }

}

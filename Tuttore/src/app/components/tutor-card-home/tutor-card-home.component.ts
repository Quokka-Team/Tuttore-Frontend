import { Component, OnInit, Input } from '@angular/core';
import { UserTestModel } from 'src/app/models/usertest.model';

@Component({
  selector: 'app-tutor-card-home',
  templateUrl: './tutor-card-home.component.html',
  styleUrls: ['./tutor-card-home.component.css']
})
export class TutorCardHomeComponent implements OnInit {

  @Input() tutor: UserTestModel;
  constructor() { }

  ngOnInit() {
  }

}

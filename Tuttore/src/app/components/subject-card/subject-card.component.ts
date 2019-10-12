import { Component, OnInit, Input } from '@angular/core';
import { SubjectModel } from 'src/app/models/subjects.model';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input() subject:SubjectModel;
  constructor() { }

  ngOnInit() {
  }

}

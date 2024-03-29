import { Component, OnInit } from "@angular/core";
import { TutorsService } from "src/app/services/tutors.service";
import { SearchModel } from "src/app/models/search.model";

import { FormControl, NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import * as _ from "underscore";
import { SubjectsService } from "src/app/services/subjects.service";
import { SubjectModel } from "src/app/models/subjects.model";
import { TutorModel } from 'src/app/models/tutor.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tutors: any[] =[];
  recommendedTutors: any[] = [];
  subjectSearched;

  myControl = new FormControl();
  courses = {};
  options;
  filteredOptions: Observable<string[]>;
  subjectId;
  subject:string = null;

  constructor(
    private tutorsService: TutorsService,
    private subjectService: SubjectsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(routeParams => {
      if(routeParams.subject){
        
        this.getTutorsBySubjectName(routeParams.subject);
      }
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getSubjects();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private initializeSubjectsData(data: SubjectModel[]) {
    for (let subject of data) {
      this.courses[subject._id] = subject.name;
    }
    this.options = Object.values(this.courses);
    this.subjectSearched = new SearchModel();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  getData(value) {
    this.subjectId = _.invert(this.courses)[value];
    this.subject = value;
   
  }

  getTutorsBySubjectName(subject:string){

    subject
    this.tutorsService.getTutorsBySubject(subject).subscribe(
      (data: any) => {
        console.log(data);
        
        this.tutors = data.avaibleTutors;
      },
      e => {
        console.log(e.error.error.message);
      }
    );

    this.tutorsService.getNewTutorsBySubject(subject).subscribe(
      (data: any) => {
        this.recommendedTutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );    
  }

  getTutors() {
    if (this.subjectId) {
      this.tutorsService.getTutorsBySubject(this.subjectId).subscribe(
        (data: any) => {
          this.tutors = data.avaibleTutors;
        },
        e => {
          console.log(e.error.error.message);
        }
      );
    }
  }

  getNewTutors() {
    if (this.subjectId) {
      this.tutorsService.getNewTutorsBySubject(this.subjectId).subscribe(
        (data: any) => {
          this.recommendedTutors = data;
        },
        e => {
          console.log(e.error.error.message);
        }
      );
    }
  }

  getSubjects() {
    this.subjectService.getAllSubjects().subscribe(
      (data: SubjectModel[]) => {
        this.initializeSubjectsData(data);
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

}

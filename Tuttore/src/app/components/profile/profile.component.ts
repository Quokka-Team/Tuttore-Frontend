import { Component, OnInit, NgZone } from "@angular/core";
import { TutorsService } from "../../services/tutors.service";
import { TutorModel } from "src/app/models/tutor.model";

import { Router, ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { SubjectsService } from "src/app/services/subjects.service";
import { SubjectModel } from "src/app/models/subjects.model";
import { map, startWith } from "rxjs/operators";
import { SearchModel } from "src/app/models/search.model";
import * as _ from "underscore";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: any = {};
  newTutors: TutorModel[];
  subjects: any[] = [];
  description: string;
  myControl = new FormControl();
  courses = {};
  options;
  subjectSearched;
  filteredOptions: Observable<string[]>;
  subjectId;
  id: string;
  reloaded: boolean = true;
  constructor(
    private tutorsService: TutorsService,
    private subjectService: SubjectsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone
  ) {
    this.getNewTutors();
  }

  ngOnInit() {
    //this.loadScript('assets/js/libs/fullcalendar.js');
    this.activatedRoute.params.subscribe(routeParams => {
      const id = routeParams.id;
      this.getUserInfo(id);
    });
  }

  reload(){
    if(this.reloaded){
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
    this.reloaded=false;
    }
  }

  getUserInfo(id: string) {
    this.id = id;
    if (id == "user") {
      this.tutorsService.getUser().subscribe(
        (data: any) => {
          if (data.isTutor) {
            this.tutorsService
            .getTutor("this")
            .subscribe((tutor: TutorModel) => {
              this.user = tutor;
              this.user.isTutor = true;
            });
          } else {
            this.user = data;
            this.user.isTutor = false;
          }
          this.getSubjects();
        },
        error => {
          console.log("hubo un error");
          console.log(error);
        }
      );
    } else {
      this.tutorsService.getTutor(id).subscribe((tutor: TutorModel) => {
        this.user = tutor;
        this.user.isTutor = true;
      });
    }
  }

  getNewTutors() {
    this.tutorsService.getNewTutors().subscribe(
      (data: TutorModel[]) => {
        this.newTutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

  becomeTutor() {
    this.tutorsService.becomeTutor(this.description).subscribe(data => {
      this.add_Subject();
    });
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
    if(this.user.courses){
      for (let course of this.user.courses) {
        if (course.idCourse in this.courses) {
          delete this.courses[course.idCourse];
        }
      }
    }
    this.options = Object.values(this.courses);
    this.subjectSearched = new SearchModel();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
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

  add_Subject() {
    if (this.subjectId) {
      this.tutorsService.addSubject(this.subjectId).subscribe(data => {
        location.reload();
      });
    }
  }

  getData(value) {
    this.subjectId = _.invert(this.courses)[value];
  }

  isUser() {
    return this.id == "user";
  }
}

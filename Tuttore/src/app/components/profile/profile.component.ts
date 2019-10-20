import { Component, OnInit } from "@angular/core";
import { TutorsService } from "../../services/tutors.service";
import { TutorModel } from "src/app/models/tutor.model";
import { StudentModel } from "src/app/models/student.model";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { SubjectsService } from "src/app/services/subjects.service";
import { SubjectModel } from "src/app/models/subjects.model";
import { map, startWith } from "rxjs/operators";
import { SearchModel } from "src/app/models/search.model";
import * as _ from "underscore";
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: any={};
  newTutors: TutorModel[];
  subjects: any[] = [];
  description: string;
  myControl = new FormControl();
  courses = {};
  options;
  subjectSearched;
  filteredOptions: Observable<string[]>;
  subjectId;
  editProfile: ProfileModel;
  id:string;
  constructor(
    private tutorsService: TutorsService,
    private subjectService: SubjectsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.getNewTutors();
    this. editProfile = new ProfileModel();
  }

  ngOnInit() {
    // this.loadScript('assets/js/libs/fullcalendar.js');
    this.activatedRoute.params.subscribe(routeParams => {
      const id = routeParams.id;
      this.getUserInfo(id);
    });

  }


  getUserInfo(id:string) {
   
    this.id =id;
    if (id == "user") {
      this.tutorsService.getUser().subscribe(
        (data: any) => {
          if (data.isTutor) {
            this.tutorsService
              .getTutor("this")
              .subscribe((tutor: TutorModel) => {
                this.user = tutor;
                this.user.isTutor = true;
                this.editProfile.name=this.user.name;
                this.editProfile.lastName=this.user.lastName;
                this.editProfile.email=this.user.email;
                this.editProfile.career=this.user.career;
                this.editProfile.gpa=this.user.gpa;
                this.editProfile.description=this.user.description;
                this.editProfile.phoneNumber=this.user.phoneNumber;
                this.getSubjects();
              });
          } else {
            this.user = data;
            this.user.isTutor = false;
          }
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
        console.log(data);

        this.newTutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

  becomeTutor() {
    this.tutorsService.becomeTutor(this.description).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/profile/user");
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
    for(let course of this.user.courses){
      if (course.idCourse in this.courses){
        delete this.courses[course.idCourse];
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

  add() {
    if(this.subjectId){ 
      this.tutorsService.addSubject(this.subjectId).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }

  getData(value) {
    this.subjectId = _.invert(this.courses)[value];
  }

  isUser(){
    return this.id=="user";
  }

}

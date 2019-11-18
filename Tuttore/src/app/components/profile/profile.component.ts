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

import { Calendar } from '@fullcalendar/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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


  //Calendario
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() },
    { title: 'EVENTO', date: '2019-11-20' }
  ];

  calendarWeekends = true;

  calendarHeader = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }
  //Fin Calendario

  
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
    this.activatedRoute.params.subscribe(routeParams => {
      const id = routeParams.id;
      this.getUserInfo(id);
    });
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
              this.getSubjects();
              this.user.isTutor = true;
            });
          } else {
            
            
            this.user.isTutor = false;
            this.user = data;
            this.getSubjects();
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
      console.log(this.user.courses);
      
      for (let course of this.user.courses) {
        if (course.idCourse in this.courses) {
          delete this.courses[course.idCourse];
        }
        console.log(Object.keys(this.courses).length);
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

  fulltutor(){
    return Object.keys(this.courses).length == 0;
  }

  handleDateClick(arg) {
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }
}

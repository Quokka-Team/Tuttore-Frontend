import { Component, OnInit, NgZone } from "@angular/core";
import { TutorsService } from "../../services/tutors.service";
import { TutorModel } from "src/app/models/tutor.model";

import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { SubjectsService } from "src/app/services/subjects.service";
import { SubjectModel } from "src/app/models/subjects.model";
import { map, startWith, first } from "rxjs/operators";
import { SearchModel } from "src/app/models/search.model";
import * as _ from "underscore";
import { ChatService } from "src/app/services/chat.service";
import { ViewChild, ElementRef } from "@angular/core";
import { log } from 'util';

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
  username: string;

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

  selector:string = null;
  addingDate;
  //Fin Calendario


  constructor(
    private tutorsService: TutorsService,
    private subjectService: SubjectsService,
    private chatService: ChatService,
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
      this.id="user";
      this.tutorsService.getUser().subscribe(
        (data: any) => {
          if (data.isTutor) {
            this.tutorsService.getTutor("this").subscribe((tutor: TutorModel) => {            
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
    }else{
      this.tutorsService.getTutor(this.id).subscribe((tutor: TutorModel) => {

  	    this.tutorsService.getUser().subscribe((data:any) => {
          if(data.id == tutor.idTutor){
            this.id="user";
            if (data.isTutor) {
              this.tutorsService.getTutor("this").subscribe((tutor: TutorModel) => {            
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

          }else{
            this.user = tutor;
            this.user.isTutor = true;
            this.username = this.user.email.match(/^([^@]*)@/)[1];
          }
        },
        error => {
          console.log("hubo un error");
          console.log(error);
        });
      },
      error => {
        console.log("hubo un error");
        console.log(error);
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

  fulltutor() {
    return Object.keys(this.courses).length == 0;
  }


  // @ViewChild("closeModal", { static: false }) private closeModal: ElementRef;
  public sendMessage() {
    // let message = form.form.value.contactMessage;

this.chatService
      .getIdChat(this.username).pipe(first()).subscribe(id=> {
  
        
        
        if(id==-1){
          this.chatService.createChat(this.username)
          .then(()=>{
            // document.getElementById("CloseButton").click();
           
          })
          .catch();
        }
        this.router.navigate(["/chat", `${this.username}`]);
      })

      

    


      
        

       
    }
  async handleDateClick(arg) {
    document.getElementById("openModalButton").click();
    this.addingDate = arg;
  }

  onSubmit(f: NgForm){
    if(this.selector!=null){
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: this.selector,
        start: this.addingDate.date,
        allDay: this.addingDate.allDay
      });
      document.getElementById("close").click();
    }

  }
}

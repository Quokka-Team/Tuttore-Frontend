import { Component, OnInit, NgZone } from "@angular/core";
import { TutorsService } from "../../services/tutors.service";
import { TutorModel } from "src/app/models/tutor.model";

import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { SubjectsService } from "src/app/services/subjects.service";
import { SubjectModel } from "src/app/models/subjects.model";
import { map, startWith } from "rxjs/operators";
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
import { ViewFlags } from '@angular/compiler/src/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

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

  calendarEvents: EventInput[];

  calendarWeekends = true;

  calendarHeader = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }

  selector:string = null;
  addingDate;
  singleEvent;
  indexEvent;
  thisEvent;
  oppositeEvent;
  oppositeColor;

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
              this.calendarEvents = this.user.events;
              console.log(this.calendarEvents);
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
          if(data.id == this.id){
            this.id="user";
            if (data.isTutor) {
              this.tutorsService.getTutor("this").subscribe((tutor: TutorModel) => {            
                this.user = tutor;
                this.getSubjects();
                this.user.isTutor = true;
                this.calendarEvents = this.user.events;
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
            this.calendarEvents = this.user.events;
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
  public sendMessage(form: NgForm) {
    let message = form.form.value.contactMessage;
    this.chatService
      .createChat(message, this.username)
      .then(() => {
        

        document.getElementById("CloseButton").click();
        this.router.navigate(["/chat", `${this.username}`]);
      })

      .catch();
  }

  // Funciones del calendario  ---------------------------------------------------------------------------------

  async newEvent(arg) {
    if(arg.allDay){
      return;
    }
    this.addingDate = arg;
    document.getElementById("openModalButton").click();
  }

  onSubmit(){
    if(this.selector!=null){

      let newEvent = {
        id:null,
        title: this.selector,
        start: this.addingDate.date,
        color:null,
        textColor:"white",
        overlap:false,
        selectable:true,
      };

      if(this.selector=="Disponible"){
        newEvent.color ='#A2C64B';
      }else{
        newEvent.color ='#096682';
      }

      this.tutorsService.newEvent(newEvent).subscribe((res)=>{
        console.log(res); //Revisar que esta llegando solo el id --------------------------------------
        newEvent.id = res;
          this.calendarEvents = this.calendarEvents.concat(newEvent);
          document.getElementById("close").click(); 
      }, error =>{
        console.log("Hubo un error");
        console.log(error);
        document.getElementById("close").click();
      });
    }
  }

  editEvent(arg){
    for(let i=0;i<this.calendarEvents.length;i++){
      if(arg.event.id==this.calendarEvents[i].id){
        this.indexEvent = i;
        this.singleEvent = Object.assign({}, this.calendarEvents[i]);
        this.thisEvent = this.calendarEvents[this.indexEvent].title;
        if(this.thisEvent == "Tutoría"){
          this.oppositeEvent = "Disponible";
          this.oppositeColor = "#A2C64B";
        }else{
          this.oppositeEvent = "Tutoría";
          this.oppositeColor = "#096682";
        }
        document.getElementById("update").click();
        break;
      }
    }
  }

  update(){
    let calendarEvents = this.calendarEvents.slice();
    this.singleEvent.title = this.oppositeEvent;
    this.singleEvent.color = this.oppositeColor;

    this.tutorsService.updateEvent(this.singleEvent).subscribe( (res)=>{
      console.log(res);

      calendarEvents[this.indexEvent] = this.singleEvent;
      this.calendarEvents = calendarEvents;
      document.getElementById("closeUpdate").click();
    }, error => {
      console.log("Hubo un error");
      console.log(error);
      document.getElementById("closeUpdate").click();
    });
  }

  delete(){
    
    this.tutorsService.deleteEvent(this.singleEvent.id).subscribe( (res)=>{
      console.log(res);
      
      let calendarEvents = this.calendarEvents.slice();
      calendarEvents.splice(this.indexEvent,1);
      this.calendarEvents = calendarEvents;
      document.getElementById("closeUpdate").click();
    }, error => {
      console.log("Hubo un error");
      console.log(error);
      document.getElementById("closeUpdate").click();
    });
  }
}

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

import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SessionModel } from '../../models/session.model';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {


  sessionId: string;
  userComment: string;
  userRate: number;

  user: any = {};
  newTutors: TutorModel[];
  subjects: any[] = [];
  description: string;
  price: number;
  myControl = new FormControl();
  courses = {};
  options;
  subjectSearched;
  filteredOptions: Observable<string[]>;
  subjectId;
  id: string;
  username: string;
  newProfileImage: File=null;
  isNewImageEmpty: boolean;
  newPrice: number;
  newDescription: string;
  newName: string;
  newLastName: string;
  newCareer: string;
  newPhoneNumber: number;
  newGpa: number;
  userId;
  actualId;
  tutor:boolean;

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
  endHours=0;
  endMinutes=0;
  availableEvents: EventInput[] = [];

  //Fin Calendario

  //Recibir sesiones sin feedback

  noFeedBackedSession: Array<any>=[];
  tutorComments: Array<any>=[];

  //Solicitud y respuesta de solitudes

  posibleRequestStart = new Date();
  posibleRequestEnd = new Date();
  posibleRequestStartString:string="null";
  posibleRequestEndString:string="null";
  requestedCourse;
  requestedSessions:Array<SessionModel>=[];


  //Fin de solicitud y respuesta de solitudes


  constructor(
    private tutorsService: TutorsService,
    private subjectService: SubjectsService,
    private chatService: ChatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone
  ) {
    this.getNewTutors();
    this.isNewImageEmpty = true;
    this.sessionId = "";
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.activatedRoute.params.subscribe(routeParams => {
      const id = routeParams.id;

      this.getUserInfo(id);
    });
    document.getElementById("close").addEventListener("click", () => this.cancel());
  }
  
  getUserInfo(id: string) {
    this.id = id;
    this.actualId = id;
    this.requestedSessions.splice(0,this.requestedSessions.length);
    if (id == "user") {
      this.id="user";
      this.tutorsService.getUser().subscribe(
        (data: any) => {
          if (data.isTutor) {

            // Si es tutor y entra a su perfil normal

            this.tutor=true;
            this.tutorsService.getTutor("this").subscribe((tutor: any) => {            
              this.user = tutor;
              this.getSubjects();
              this.user.isTutor = true;
              this.calendarEvents = this.user.events;
              this.newPrice = this.user.price;
              this.newCareer = this.user.career;
              this.newDescription = this.user.description;
              this.newGpa = this.user.gpa;
              this.newLastName = this.user.lastName;
              this.newName = this.user.name;
              this.newPhoneNumber = this.user.phoneNumber;
              this.user.id = tutor.idTutor;
              this.tutorsService.getTutorSessions(data.id).subscribe((res: Array<SessionModel>) =>{
                if(res.length>0){
                  for(let i=0;i<res.length;i++){
                    if(res[i].status == "0"){
                      this.requestedSessions = this.requestedSessions.concat(res[i]);
                    }
                  }
                }else{
                  console.log("no");
                }
              });

              this.noFeedBackedSession = [];
              this.tutorComments = [];           
              this.tutorsService.getNoFeedBackSessionStudent(this.user.id).subscribe( (res: Array<any>) => {
                for(let i=0;i<res.length;i++){
                    this.noFeedBackedSession.push(res[i]);
                }
                console.log(this.noFeedBackedSession.length);
              });
              this.tutorsService.getTutorComments(this.user.id).subscribe( (res: Array<any>) => {
                for(let i=0;i<res.length;i++){
                    this.tutorComments.push(res[i]);
                }
              });
            });
          } else {

            // Si es usuario y entra a su perfil normal

            this.tutor=false;
            this.user.isTutor = false;
            this.user = data;
            this.getSubjects();
            this.user.isTutor = false;
            this.newCareer = this.user.career;
            this.newGpa = this.user.gpa;
            this.newLastName = this.user.lastName;
            this.newName = this.user.name;
            this.newPhoneNumber = this.user.phoneNumber;
            
            
            this.tutorsService.getNoFeedBackSessionStudent(this.user.id).subscribe( (res: Array<any>) => {
              for(let i=0;i<res.length;i++){
                  this.noFeedBackedSession.push(res[i]);
              }
              console.log(this.noFeedBackedSession.length);
            });
            this.tutorsService.getTutorComments(this.actualId).subscribe( (res: Array<any>) => {
              for(let i=0;i<res.length;i++){
                  this.tutorComments.push(res[i]);
              }
            });
          }
        },
        error => {
          console.log("hubo un error");
          console.log(error);
        }
      );
    }else{
      this.tutorsService.getTutor(this.id).subscribe((tutor: TutorModel) => {
        this.tutor=true;
  	    this.tutorsService.getUser().subscribe((data:any) => {
          if(data.id == this.id){
            this.id="user";
            if (data.isTutor) {

              // Cuando un tutor se da click a si mismo 

              this.tutorsService.getTutor("this").subscribe((tutor: any) => {            
                this.user = tutor;
                this.getSubjects();
                this.user.isTutor = true;
                this.calendarEvents = this.user.events;
                this.newPrice = this.user.price;
                this.newCareer = this.user.career;
                this.newDescription = this.user.description;
                this.newGpa = this.user.gpa;
                this.newLastName = this.user.lastName;
                this.newName = this.user.name;
                this.newPhoneNumber = this.user.phoneNumber;
                this.user.id = tutor.idTutor;
                this.tutorsService.getTutorSessions(data.id).subscribe((res: Array<SessionModel>) =>{
                  if(res.length>0){
                    for(let i=0;i<res.length;i++){
                      if(res[i].status == "0"){
                        this.requestedSessions = this.requestedSessions.concat(res[i]);
                      }
                    }
                  }else{
                    console.log("no");
                  }
                });
                
                this.noFeedBackedSession = [];
                this.tutorComments = [];
                
                this.tutorsService.getNoFeedBackSessionStudent(this.user.id).subscribe( (res: Array<any>) => {
                  for(let i=0;i<res.length;i++){
                      this.noFeedBackedSession.push(res[i]);
                  }
                  console.log(this.noFeedBackedSession.length);
                });
                this.tutorsService.getTutorComments(this.actualId).subscribe( (res: Array<any>) => {
                  for(let i=0;i<res.length;i++){
                      this.tutorComments.push(res[i]);
                  }
                });
              });
            } else {
              
              // Si no es tutor y se da click a si mismo (Imposiblle)

              this.user.isTutor = false;
              this.user = data;
              this.getSubjects();
              this.user.isTutor = false;
              this.newCareer = this.user.career;
              this.newGpa = this.user.gpa;
              this.newLastName = this.user.lastName;
              this.newName = this.user.name;
              this.newPhoneNumber = this.user.phoneNumber;
              
              
              this.tutorsService.getTutorComments(this.actualId).subscribe( (res: Array<any>) => {
                for(let i=0;i<res.length;i++){
                    this.tutorComments.push(res[i]);
                }
              });
            }
          }else{

            // Cuando un usuario ingresa a el perfil de otro usuario distinto del mismo

            this.userId = data.id;
            this.user = tutor;
            this.user.isTutor = true;
            this.username = this.user.email.match(/^([^@]*)@/)[1];
            this.calendarEvents = this.user.events;

            this.noFeedBackedSession = [];
            this.tutorComments = []; 
            this.tutorsService.getTutorComments(this.actualId).subscribe( (res: Array<any>) => {
              for(let i=0;i<res.length;i++){
                  this.tutorComments.push(res[i]);
              }
            });
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
    this.tutorsService.becomeTutor(this.description, this.price).subscribe(data => {
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
    // console.log(this.courses);
    // console.log(this.user.courses);
    


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
      });
    
  }


  // Funciones del calendario  ---------------------------------------------------------------------------------

  async newEvent(arg) {
    if(arg.allDay){
      return;
    }
    this.addingDate = arg;
    document.getElementById("openModalButton").click();
  }

  cancel(){
    this.endHours=0;
    this.endMinutes=0;
    this.selector=undefined;
  }

  onSubmit(form){
    if(!form.invalid){
      if((this.endHours==0 && this.endMinutes<15)||(this.endHours==4 && this.endMinutes>0) || (this.endHours>4)){
        return;
      }

      let endDate = new Date(this.addingDate.date.getFullYear(), this.addingDate.date.getMonth(), this.addingDate.date.getDate(), this.addingDate.date.getHours()+this.endHours, this.addingDate.date.getMinutes()+this.endMinutes, this.addingDate.date.getSeconds(), this.addingDate.date.getMilliseconds());

      let newEvent = {
        id:null,
        title: this.selector,
        start: this.addingDate.date,
        end: endDate,
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
        newEvent.id = res;
        this.calendarEvents = this.calendarEvents.concat(newEvent);
        document.getElementById("close").click();
        form.submitted = false;
        this.cancel();
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

// Funciones de editar perfil  ---------------------------------------------------------------------------------

  onFileSelected(event){
    console.log(event);
    this.isNewImageEmpty = false;
    this.newProfileImage = <File> event.target.files[0];
  }

  changeProfileImage(){
    if(this.isNewImageEmpty){
      console.log(this.user.id);
      return;
    }
    this.tutorsService.changeProfileImage(this.user.id, this.user.email, this.newProfileImage).subscribe(data => {
      location.reload();
    });
  }

  changeStudentInfo(f: NgForm){
    if(f.invalid){
      return;
    }
    this.tutorsService.updateStudent(this.user.id, this.newName, this.newLastName, this.newCareer, this.newGpa, this.newPhoneNumber.toString()).subscribe(data => {
      location.reload();
    });
  }

  changeTutorInfo(f: NgForm){
    if(f.invalid){
      return;
    }
    this.tutorsService.updateTutor(this.user.id, this.newName, this.newLastName, this.newCareer, this.newGpa, this.newPhoneNumber.toString(), this.newDescription, this.newPrice).subscribe(data => {
      location.reload();
     });
  }

  clickRateTutor(thisSession: string){
    this.sessionId = thisSession;
  }

  sendReport(f: NgForm){
    if(f.invalid){
      return;
    }
    this.tutorsService.commentSession(this.sessionId, this.userComment, this.userRate).subscribe(data => {
      location.reload();
    });
  }

  //Solicitar tutoría

  request(course){
    this.availableEvents.splice(0,this.availableEvents.length);
    for(let i=0;i<this.calendarEvents.length;i++){
      if(this.calendarEvents[i].title=="Disponible" && !this.availableEvents.includes(this.calendarEvents[i])){
        this.availableEvents = this.availableEvents.concat(this.calendarEvents[i]);
      }
    }
    
    if(this.availableEvents.length==0){
      this.availableEvents.splice(0,this.availableEvents.length);
      document.getElementById("noAvailable-button").click();
    }else{
      this.requestedCourse = course.idCourse;
      document.getElementById("request-button").click();
    }
  }

  posibleRequest(event){
    this.posibleRequestStart = event.event.start;
    this.posibleRequestStartString = event.event.start.toISOString().substring(0, 10) + " / " + (parseInt((event.event.start.toISOString().substring(11, 13)))-5).toString() + event.event.start.toISOString().substring(13, 16);
    this.posibleRequestEnd = event.event.end;
    this.posibleRequestEndString = event.event.end.toISOString().substring(0, 10)+ " / " + (parseInt((event.event.end.toISOString().substring(11, 13)))-5).toString() + event.event.end.toISOString().substring(13, 16);
    document.getElementById("accept-button").click();

  }

  confirmRequest(){
    const data = {
      idTutor: this.id,
      idStudent: this.userId,
      idCourse: this.requestedCourse,
      dateStart: this.posibleRequestStart,
      dateEnd: this.posibleRequestEnd
    }
    this.tutorsService.requestEvent(data).subscribe( res =>{
      document.getElementById("cancel-request").click();
      document.getElementById("cancel-calendar").click();
    }, error =>{
      console.log("Hubo un error");
      console.log(error);
    })
  }

  //------------------

  getSessionStartDate(id):string{
    for(let i=0;i<this.requestedSessions.length;i++){
      if(this.requestedSessions[i].id == id){
        return this.requestedSessions[i].event.start.substring(0, 10) + " / " + (parseInt((this.requestedSessions[i].event.start.substring(11, 13)))-5).toString() + this.requestedSessions[i].event.start.substring(13, 16);
      }
    }
    return "hubo un error";
  }

  getSessionEndDate(id):string{
    for(let i=0;i<this.requestedSessions.length;i++){
      if(this.requestedSessions[i].id == id){
        return (parseInt((this.requestedSessions[i].event.end.substring(11, 13)))-5).toString() + this.requestedSessions[i].event.end.substring(13, 16);
      }
    }
    return "hubo un error";
  }

  getCourse(id):string{
    for(let i=0;i<this.user.courses.length;i++){
      if(id == this.user.courses[i].idCourse){
        return this.user.courses[i].name;
      }
    }
    return "hubo un error";
  }

  acceptSession(session){
    this.tutorsService.acceptSession(session.id).subscribe( res => {
      for(let i=0;i<this.calendarEvents.length;i++){
        if(this.calendarEvents[i].start == session.event.start && this.calendarEvents[i].end == session.event.end){

          this.tutorsService.deleteEvent(this.calendarEvents[i].id).subscribe( (res)=>{

            let newEvent = {
              id:null,
              title: "Tutoria - " + this.getCourse(session.idCourse),
              start: session.event.start,
              end: session.event.end,
              color:'#096682',
              textColor:"white",
              overlap:false,
              selectable:true,
            };

            this.calendarEvents = this.calendarEvents.concat(newEvent); 
            let calendarEvents = this.calendarEvents.slice();
            calendarEvents.splice(i,1);
            this.calendarEvents = calendarEvents;
            let index = this.requestedSessions.indexOf( session );
            this.requestedSessions.splice(index, 1);
            return;
          }, error => {
            console.log("Hubo un error", error);
            return;
          });
        }
      }
    },err => {
      console.log("Hubo un error", err);
    });
  }

  rejectSession(session){
    this.tutorsService.rejectSession(session.id).subscribe( res => {
      let i = this.requestedSessions.indexOf( session );
      this.requestedSessions.splice( i, 1 );
    },err => {
      console.log("Hubo un error", err);
    });
  }

}



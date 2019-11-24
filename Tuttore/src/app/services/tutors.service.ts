import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams, HttpRequest, HttpEventType } from "@angular/common/http";
import { map } from "rxjs/operators";
import { StudentModel } from '../models/student.model';
import { SearchSubjectModel } from '../models/searchSubject.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  
  userToken:string;
  url = `https://tuttore.tk/`;
    
  constructor(private http: HttpClient, private route:Router) {
    this.readToken();
  }

  private saveToken(tokenId){
    sessionStorage.setItem('token',tokenId);

    let date = new Date();
    date.setSeconds(1296000);

    sessionStorage.setItem('expires', date.getTime().toString() );

    this.readToken();
  }


  getNewTutors() {
     const headers = new HttpHeaders({
    });
    return this.http.get(`${this.url}getNewTutors/6`,{ headers});
  }

  getTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getTutorsByCourse/${id}`);

  }

  getNewTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getNewTutorsByCourse/${id}/5`);
  }

  getTutor(id: string) {
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    return this.http.get(`${this.url}getTutor/${id}`, {headers: headers});
  }

  getAllCareers(){
    return this.http.get(`${this.url}getAllCareers`);
  }
  
  getVerificationCode(email:string){
    return this.http.get(`${this.url}verificationCode/${email}`)
  }

  signIn(student: StudentModel){
    return this.http.post(`${this.url}signIn/`, student ).pipe(
        map( resp => {
          this.saveToken( resp['token'] );
          return resp;
        })
      );
  }

  signUp( student:StudentModel , image:File) {

    console.log(image);
  
    let formData = new FormData();
    formData.append('name',student.name);
    formData.append('lastName',student.lastName);
    formData.append('email',student.email);
    formData.append('password',student.password);
    formData.append('career',student.career);
    formData.append('gpa', student.gpa.toString());
    formData.append('phoneNumber',student.phoneNumber);
    formData.append('isTutor',student.isTutor);
    formData.append('profilePicture',image);

    let params = new HttpParams();
    
    const options = {
      params: params,
      reportProgress: true,
      observe:'events'
    };

    const req = new HttpRequest('POST', "https://tuttore.tk/signUp", formData, options);
    return this.http.request(req).subscribe( async (event) =>{
      console.log(event);
      if(event.type==3){
        Swal.fire({
          allowOutsideClick: false,
          type: 'success',
          text: 'Su cuenta se ha creado satisfactoriamente',
        })
        this.route.navigateByUrl("/sign-in");
      }
    },err => {
        Swal.fire({
          allowOutsideClick: false,
          type: 'error',
          text: err.error.message,
        })
    });
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires');
    this.readToken();
  }

  readToken(){
    if ( sessionStorage.getItem('token') ) {
      this.userToken = sessionStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated():boolean{
    if(this.userToken.length < 2){
      return false;
    }
    
    const date = Number(sessionStorage.getItem('expires'));
    const actualDate = new Date();
    actualDate.setTime(date);

    if( actualDate < new Date()){
      console.log("El token no es válido");
      return false;
    }
    return true;
  }

  getUser(){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    return this.http.get(`${this.url}getStudent` , {headers: headers});
  }

  becomeTutor(des:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    const data = {
      description: des
    }
   return this.http.post(`${this.url}registerTutor`, data,{headers})
  }

  addSubject(id:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    const data = {
      idCourse: id
    }
   return this.http.post(`${this.url}addCourseTutor`, data,{headers})
  }

  //Servicio que me indica si el usuario ya está registrado o no
  isRegistered(email:string){
    return false;
  }

  typeStudent(email:string){
    return this.http.get(`${this.url}typeStudent/${email}`);
  }

  signUpGoogle(student:StudentModel, googleToken:string){
    const authData = {...student};
    const headers = new HttpHeaders({
      'authorization': `bearer ${googleToken}`
    });
    return this.http.post(`${this.url}signUpGoogle`, authData, {headers});
  }

  signInGoogle(googleToken: string, userEmail:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${googleToken}`
    });

    const data = {
      email:userEmail
    }
    return this.http.post(`${this.url}signInGoogle`, data, {headers}).pipe(
      map( resp => {
        this.saveToken( resp['token'] );
        return resp;
      })
    );
  }

  newEvent(event){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    const data = {
      title: event.title,
      start: event.start,
      color: event.color,
      textColor:event.textColor,
      overlap:event.overlap,
      selectable:event.selectable
    }
    return this.http.post(`${this.url}addEventTutor`, data, {headers});
  }

  deleteEvent(id){

    const data = {
      idEvent: id
    }

    return this.http.post(`${this.url}updateEventTutor`, data);
  }

  updateEvent(event){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    const data = {
      id: event.id,
      title: event.title,
      start: event.start,
      color: event.color,
      textColor:event.textColor,
      overlap:event.overlap,
      selectable:event.selectable,
    }

    return this.http.post(`${this.url}deleteEventTutor`, data, {headers});
  }
}

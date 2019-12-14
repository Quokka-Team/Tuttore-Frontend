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

  becomeTutor(des:string, pri:number){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    const data = {
      description: des,
      price: pri,
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
      end: event.end,
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
      end: event.end,
      color: event.color,
      textColor:event.textColor,
      overlap:event.overlap,
      selectable:event.selectable,
    }

    return this.http.post(`${this.url}deleteEventTutor`, data, {headers});
  }

  updateStudent(idStudent: string, name: string, lastName: string, career: string, gpa: number, phoneNumber: string){
    const headers = new HttpHeaders({
    });
    const data = {
      idStudent: idStudent,
      name: name,
      lastName: lastName,
      career: career,
      gpa: gpa,
      phoneNumber: phoneNumber,
    }
    return this.http.post(`${this.url}updateStudent`, data, {headers});
  }

  updateTutor(idTutor: string, name: string, lastName: string, career: string, gpa: number, phoneNumber: string, description: string, price: number){
    const headers = new HttpHeaders({
    });
    const data = {
      idTutor: idTutor,
      name: name,
      lastName: lastName,
      career: career,
      gpa: gpa,
      phoneNumber: phoneNumber,
      description: description,
      price: price,
    }
    return this.http.post(`${this.url}updateTutor`, data, {headers});
  }

  // changeProfileImage(id: string, email: string, profilePicture: File){
  //   const headers = new HttpHeaders({
  //   });
  //   const data = {
  //     id: id,
  //     email: email,
  //     profilePicture: profilePicture,
  //   }
  //   return this.http.post(`${this.url}updateProfilePicture`, data, {headers});
  // }

  changeProfileImage( id: string, email: string, profilePicture: File) {
  
    let formData = new FormData();
    formData.append('id',id);
    formData.append('email',email);
    formData.append('profilePicture',profilePicture);

    let params = new HttpParams();
    
    const options = {
      params: params,
      reportProgress: true,
      observe:'events'
    };

    const req = new HttpRequest('POST', "https://tuttore.tk/updateProfilePicture", formData, options);
    return this.http.request(req);
  }

  requestEvent(event){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    const data = {
      idTutor: event.idTutor,
      idStudent: event.idStudent,
      idCourse: event.idCourse,
      dateStart: event.dateStart,
      dateEnd: event.dateEnd
    }

    return this.http.post(`${this.url}addRequest`, data, {headers});

  }

  getTutorSessions(id){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    return this.http.get(`${this.url}getSessionsTutor/${id}`,{headers});
  }

  acceptSession(id){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    return this.http.get(`${this.url}acceptRequest/${id}`);
  }

  
  rejectSession(id){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });

    return this.http.get(`${this.url}rejectRequest/${id}`);
  }
}

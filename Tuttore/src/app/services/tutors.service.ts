import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { StudentModel } from '../models/student.model';
import { SearchSubjectModel } from '../models/searchSubject.model';

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  
  userToken:string;
   url = `https://tuttore.tk/`;
    
  constructor(private http: HttpClient) {
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
    let cors = "https://cors-anywhere.herokuapp.com/";
    return this.http.post( cors +`${this.url}signIn/`, student ).pipe(
        map( resp => {
          this.saveToken( resp['token'] );
          return resp;
        })
      );
  }

  signUp( student:StudentModel ) {
    const authData = {...student};
    return this.http.post(`${this.url}signUp`, authData);
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
}

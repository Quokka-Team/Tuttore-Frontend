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
   url = `http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/`;
  constructor(private http: HttpClient) {
    this.readToken();
  }

  private getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: "" // Token 
    });

    return this.http.get(this.url, { headers });
  }

  getNewTutors() {
     const headers = new HttpHeaders({
      // numberTutors: "" 
    });
    return this.http.get(`${this.url}getNewTutors/10`,{ headers})
  }

  getTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getTutorsByCourse/${id}`);

  }

  getNewTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getNewTutorsByCourse/${id}/2`);
  }

  getTutor(id: string) {
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    return this.http.get(`${this.url}getTutor/${id}`, {headers: headers});
  }
  
  signIn(student: StudentModel){
    let cors = "https://cors-anywhere.herokuapp.com/";
    return this.http.post( cors +'http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/signIn/', student ).pipe(
        map( resp => {
          this.saveToken( resp['token'] );
          return resp;
        })
      );
  }

  signUp( student:StudentModel) {
    const authData = {...student};
    return this.http.post('http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/signUp', authData);
  }

  private saveToken(tokenId){
    localStorage.setItem('token',tokenId);

    let date = new Date();
    date.setSeconds(1296000);

    localStorage.setItem('expires', date.getTime().toString() );

    this.readToken();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    this.readToken();
  }

  readToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated():boolean{
    if(this.userToken.length < 2){
      return false;
    }
    
    const date = Number(localStorage.getItem('expires'));
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
    return this.http.get('http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/getStudent' , {headers: headers});
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

}

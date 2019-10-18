import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { StudentModel } from '../models/student.model';

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  
  userToken:string;

  constructor(private http: HttpClient) {
    this.readToken();
  }

  private getQuery(query: string) {
    const url = `http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/`; // URL Base del Backend
    const headers = new HttpHeaders({
      Authorization: "" // Token 
    });

    return this.http.get(url, { headers });
  }

  getNewTutors() {
    const query: string = "";
    return this.getQuery(query).pipe(map(data =>data));
  }

  getTutorsBySubject(id: string) {
    const query: string = `${id}`; 
    return this.getQuery(query);
  }

  getNewTutorsBySubject(id: string) {
    const query: string = `${id}`;
    return this.getQuery(query);
  }

  getTutor(id: string) {
    const query: string = `${id}`;
    return this.getQuery(query);
  }
  
  signIn(student: StudentModel){
    const headers = new HttpHeaders({
      'Content-Type':
        "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin':'*'
    });

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

  logout() {
    localStorage.removeItem('token');
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
      console.log("El token expiró");
      return false;
    }
    return true;
  }

}

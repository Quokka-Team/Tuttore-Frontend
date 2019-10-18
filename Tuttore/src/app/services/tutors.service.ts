import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { StudentModel } from '../models/student.model';

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  constructor(private http: HttpClient) {}

  private getQuery(query: string) {
    const url = `http://tuttore-backend.cczfhywny8.us-east-1.elasticbeanstalk.com/`; // URL Base del Backend
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
    return this.http.post(
      cors +'http://tuttore-backend.cczfhywny8.us-east-1.elasticbeanstalk.com/signIn/',
      student/*,*/ );
      // {headers});
  }


  
}

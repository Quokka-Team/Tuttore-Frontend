import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SubjectsService {
  url = `http://tuttore-backend-env.sy4e6mgnfh.us-east-1.elasticbeanstalk.com/`;

  constructor(private http: HttpClient) {}

  getMostSearchSubjects() {

    return this.http.get(`${this.url}getNewCourses/8`);
  }

  getNewSubjects() {

    return this.http.get(`${this.url}getNewCourses/8`);
  }

  getAllSubjects() {
    return this.http.get(`${this.url}getAllCourses`);
  }
}

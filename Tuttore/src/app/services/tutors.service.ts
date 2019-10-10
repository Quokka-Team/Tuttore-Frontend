import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  constructor(private http: HttpClient) {}

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD69lYwx3-CYZ9-S6LpwWmboPA69kzuqFBuTcTzUw9w1xrWKEblcQ96EV3abmtPdTF1oOJ9qv_wAtztLmw"
    });

    return this.http.get(url, { headers });
  }

  getNewTutors() {
    const query: string = "browse/new-releases";
    return this.getQuery(query).pipe(map(data => data["albums"].items));
  }

  getTutorsBySubject(id: string) {
    const query: string = `browse/categories/${id}`;
    return this.getQuery(query);
  }

  getNewTutorsBySubject(id: string) {
    const query: string = `browse/categories/${id}`;
    return this.getQuery(query);
  }

  getTutor(id: string) {
    const query: string = `browse/categories/${id}`;
    return this.getQuery(query);
  }
  
  getProfile(id: string) {
    const query: string = `browse/categories/${id}`;
    return this.getQuery(query);
  }
  
}

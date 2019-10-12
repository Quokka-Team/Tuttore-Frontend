import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SubjectsService {
  constructor(private http: HttpClient) {  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD69lYwx3-CYZ9-S6LpwWmboPA69kzuqFBuTcTzUw9w1xrWKEblcQ96EV3abmtPdTF1oOJ9qv_wAtztLmw"
    });

    return this.http.get(url, { headers });
  }

  getMostSearchSubjects() {
    const query: string = "browse/categories";
    return this.getQuery(query).pipe(map(data => data["categories"].items));
  }

  getNewSubjects() {
    const query: string = "browse/categories";
    return this.getQuery(query).pipe(map(data => data["categories"].items));
  }

  getSubjectsTest() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}

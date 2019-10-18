import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SubjectsService {
  constructor(private http: HttpClient) {  }

  private getQuery(query: string) {
    const url = ``; // URL base del Backend
    const headers = new HttpHeaders({
      Authorization:  "" // Aqui va el Token
    });

    return this.http.get(url, { headers });
  }

  getMostSearchSubjects() {
    const query: string = "";
    return this.getQuery(query).pipe(map(data => data));
  }

  getNewSubjects() {
    const query: string = "";
    return this.getQuery(query).pipe(map(data => data));
  }


}

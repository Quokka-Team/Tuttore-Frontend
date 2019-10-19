import { Component, OnInit } from "@angular/core";
import { TutorsService } from "src/app/services/tutors.service";
import { SearchModel } from "src/app/models/search.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tutors: any[] = [];
  recommendedTutors: any[] = [];
  subjectSearched: SearchModel;

  constructor(private tutorsService: TutorsService) {}

  ngOnInit() {
    this.subjectSearched = new SearchModel();
  }

  getTutors() {
    let id: string = this.subjectSearched.subject;
    this.tutorsService.getTutorsBySubject(id).subscribe(
      (data: any) => {
        console.log(data);
        // this.tutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

  getNewTutors() {
    let id: string = this.subjectSearched.subject;
    this.tutorsService.getNewTutorsBySubject(id).subscribe(
      (data: any) => {
        console.log(data);
        // this.tutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

  getUserPostTest(){
    
  }
}

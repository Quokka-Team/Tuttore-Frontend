import { Component, OnInit, OnDestroy } from "@angular/core";
import { SubjectsService } from "src/app/services/subjects.service";
import { TutorsService } from "src/app/services/tutors.service";
import { UserTestModel } from 'src/app/models/usertest.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  subjects: any[];
  newSubjects: any[];
  newTutors: UserTestModel[];


  constructor(
    private subjectsService: SubjectsService,
    private tutorsService: TutorsService
  ) {}

  ngOnInit() {

  }

  getMostSearchSubjects() {
    this.subjectsService.getMostSearchSubjects().subscribe(
      (data: any) => {
        console.log("MOST SEARCHED SUBJECTS");
        console.log(data);
        this.subjects = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }
  getNewSubjects() {
    this.subjectsService.getNewSubjects().subscribe(
      (data: any) => {
        console.log("NEW SUBJECTS");
        console.log(data);
        this.newSubjects = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

  getNewTutors() {
    this.tutorsService.getNewTutors().subscribe(
      (data: any) => {
        console.log("NEW TUTORS");
        console.log(data);
        this.newTutors = data;
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

}

import { Component, OnInit, OnDestroy } from "@angular/core";
import { SubjectsService } from "src/app/services/subjects.service";
import { TutorsService } from "src/app/services/tutors.service";
import { SubjectModel } from 'src/app/models/subjects.model';
import { TutorModel } from 'src/app/models/tutor.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  subjects: SubjectModel[];
  newSubjects: SubjectModel[];
  newTutors: TutorModel[];
  tutor0: TutorModel;


  constructor(
    private subjectsService: SubjectsService,
    private tutorsService: TutorsService
  ) {
    this.getNewTutors();
    this.getNewSubjects();
    this.getMostSearchSubjects();
  }

  ngOnInit() {
    
  }

  getMostSearchSubjects() {
    this.subjectsService.getMostSearchSubjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      e => {
        console.log(e);
      }
    );
  }
  getNewSubjects() {
    this.subjectsService.getNewSubjects().subscribe(
      (data: any) => {
        this.newSubjects = data;
      },
      e => {
        console.log(e);
      }
    );
  }

  getNewTutors() {
    this.tutorsService.getNewTutors().subscribe(
      (data: TutorModel[]) => {

        this.newTutors = data.slice(1,data.length);
        this.tutor0 = data[0];
      },
      e => {
        console.log(e.error.error.message);
      }
    );
  }

}

import { Component, OnInit } from "@angular/core";
import { TutorsService } from "src/app/services/tutors.service";
import { SearchModel } from "src/app/models/search.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  tutors: any[] = [1, 2, 3];
  recommendedTutors: any[] = [1, 2, 3];
  subjectSearched: SearchModel;

  constructor(private tutorsService: TutorsService) {}
  
  ngOnInit() {
    this.subjectSearched = new SearchModel();
    this.getUserPostTest();
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

  getUserPostTest(){
    this.tutorsService.getUserPostTest(this.subjectSearched.subject).subscribe(
      (data: any) => {
        console.log(data);
        this.tutors = data;
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



//   public data: { [key: string]: Object }[] = [
//     { Id: "s3", Country: "Alaska" },
//     { Id: "s1", Country: "California" },
//     { Id: "s2", Country: "Florida" },
//     { Id: "s4", Country: "Georgia" }];
// // maps the appropriate column to fields property
// public fields: Object = { text: "Country", value: "Id" };
// // set the placeholder to the DropDownList input
// public text: string = "Select a country";
// //Bind the filter event
// public onFiltering =  (e: FilteringEventArgs) => {
//     let query = new Query();
    
//     console.log(e)
//     console.log(e.text)
//     //frame the query based on search string with filter type.
//     query = (e.text != "") ? query.where("Country", "startswith", e.text, true) : query;
//     //pass the filter data source, filter query to updateData method.
//     e.updateData(this.data, query);
// };



  
}

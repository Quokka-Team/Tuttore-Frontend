import { Component, OnInit } from "@angular/core";
import { TutorsService } from "src/app/services/tutors.service";
import { SearchModel } from "src/app/models/search.model";

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as _ from 'underscore';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tutors: any[] = [];
  recommendedTutors: any[] = [];
  subjectSearched: SearchModel;

  myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  opt  ={1:'uno', 2:'dos',3:'tres'};
  options = Object.values(this.opt)
  filteredOptions: Observable<string[]>;

  constructor(private tutorsService: TutorsService) {}

  ngOnInit() {
    console.log(Object.values(this.opt) );
    console.log(Object.keys(this.opt) );
    
    this.subjectSearched = new SearchModel();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getData(value){
    console.log(_.invert(this.opt)[value]);
    
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

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private router: Router) { 
    sessionStorage.setItem('reloaded','true');
  }

  btnClick(){
    this.router.navigate(["/search"])
  }

 

}

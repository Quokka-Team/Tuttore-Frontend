import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }
 
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}

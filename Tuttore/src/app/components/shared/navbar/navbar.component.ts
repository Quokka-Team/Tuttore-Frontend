import { Component, OnInit } from '@angular/core';
import { TutorsService } from '../../../services/tutors.service';
import { Router } from '@angular/router';
import { StudentModel } from '../../../models/student.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any= {}

  constructor( private auth:TutorsService, private route: Router) {
    this.getUserInfo();
   }

  ngOnInit() {
  }

  logOut(){
    this.auth.logOut();
    this.route.navigateByUrl("/home-page");
  }

  async getUserInfo(){
    await this.auth.getUser().subscribe( data => {
      this.user=data;
      console.log(data);
    }, error => {
      console.log("hubo un error");
      console.log(error);
    } );
  }

  profileSettings(){
    this.route.navigateByUrl("/profile");
  }
}

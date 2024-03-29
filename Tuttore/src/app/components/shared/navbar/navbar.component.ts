import { Component, OnInit, NgZone } from "@angular/core";
import { TutorsService } from "../../../services/tutors.service";
import { Router } from "@angular/router";
import { GoogleService } from '../../../services/google.service';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {
  user: any = {};
  username: any;
  

  constructor(private auth: TutorsService, private route: Router, private zone:NgZone, private googleAuth:GoogleService) {
    this.getUserInfo();
  }

  ngOnInit() {}

  logOut() {
    if(this.googleAuth.isUserSignedIn()){
      this.googleAuth.signOut();
      this.auth.logOut();
    }else{
      this.auth.logOut();
    }
    this.route.navigateByUrl("/home-page");
  }

  async getUserInfo() {
    await this.auth.getUser().subscribe(
      data => {
        this.user = data;
        this.username = this.user.email.match(/^([^@]*)@/)[1];
        localStorage.setItem('mail',this.username)
      },
      error => {
        console.log("hubo un error");
        console.log(error);
      }
    );
  }

  profileSettings() {
       this.route.navigateByUrl("/profile/user");
  }
}

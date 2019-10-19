import { Component, OnInit } from "@angular/core";
import { TutorsService } from '../../services/tutors.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  user:any={
    description:"Descripción",
    email: "Correo",
    profilePicture:[],
    career:"Carrera",
    gpa:"Nota",
    phoneNumber:"Número de teléfono",
    name:"Nombre",
    lastName: "Apellido"
  };
 
  subjects:any[]=[];

  constructor(private auth:TutorsService) {
    this.getUserInfo();
  }

  ngOnInit() {}

  async getUserInfo(){
    await this.auth.getUser().subscribe( data => {
      Object.assign(this.user,data);
    }, error => {
      console.log("hubo un error");
      console.log(error);
    } );
  }
}

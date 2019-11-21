import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams, HttpRequest, HttpEventType } from "@angular/common/http";
import { map } from "rxjs/operators";
import { StudentModel } from '../models/student.model';
import { SearchSubjectModel } from '../models/searchSubject.model';

@Injectable({
  providedIn: "root"
})
export class TutorsService {
  
  userToken:string;
  url = `https://tuttore.tk/`;
    
  constructor(private http: HttpClient) {
    this.readToken();
  }

  private saveToken(tokenId){
    sessionStorage.setItem('token',tokenId);

    let date = new Date();
    date.setSeconds(1296000);

    sessionStorage.setItem('expires', date.getTime().toString() );

    this.readToken();
  }


  getNewTutors() {
     const headers = new HttpHeaders({
    });
    return this.http.get(`${this.url}getNewTutors/6`,{ headers});
  }

  getTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getTutorsByCourse/${id}`);

  }

  getNewTutorsBySubject(id: string) {
    return this.http.get(`${this.url}getNewTutorsByCourse/${id}/5`);
  }

  getTutor(id: string) {
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    return this.http.get(`${this.url}getTutor/${id}`, {headers: headers});
  }

  getAllCareers(){
    return this.http.get(`${this.url}getAllCareers`);
  }
  
  getVerificationCode(email:string){
    return this.http.get(`${this.url}verificationCode/${email}`)
  }

  signIn(student: StudentModel){
    return this.http.post(`${this.url}signIn/`, student ).pipe(
        map( resp => {
          this.saveToken( resp['token'] );
          return resp;
        })
      );
  }

  signUp( student:StudentModel , image:File) {
    // const authData = {
    //   name:student.name,
    //   lastName:student.lastName,
    //   email:student.email,
    //   password:student.password,
    //   career:student.career,
    //   gpa:student.gpa,
    //   phoneNumber:student.phoneNumber,
    //   isTutor:student.isTutor,
    //   profilePicture:image,
    // };

    // if(image!=null){
    //   let formData = new FormData();
    //   formData.append('profilePicture',student.profilePicture);
    //   return this.http.post(`${this.url}signUp`, authData,formData);
    // }
  
    // let cors = "https://cors-anywhere.herokuapp.com/";

    console.log(image);
  
    let formData = new FormData();
    formData.append('name',student.name);
    formData.append('lastName',student.lastName);
    formData.append('email',student.email);
    formData.append('password',student.password);
    formData.append('career',student.career);
    formData.append('gpa', student.gpa.toString());
    formData.append('phoneNumber',student.phoneNumber);
    formData.append('isTutor',student.isTutor);
    formData.append('profilePicture',image);

    // let params = new HttpParams();

    // const options = {
    //   params: params,
    //   reportProgress: true,
    // };

    // let header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    //return this.http.post(`${this.url}signUp`, formData, {headers:header});
    let params = new HttpParams();
    
    const options = {
      params: params,
      reportProgress: true,
      observe:'events'
    };

    const req = new HttpRequest('POST', "https://tuttore.tk/signUp", formData, options);
    return this.http.request(req).subscribe( (event) =>{
      if(event.type === HttpEventType.UploadProgress){
        console.log("Upload Progress " + (event.loaded / event.total) * 100 +"%");
      }
      console.log(event);
    });


  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires');
    this.readToken();
  }

  readToken(){
    if ( sessionStorage.getItem('token') ) {
      this.userToken = sessionStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated():boolean{
    if(this.userToken.length < 2){
      return false;
    }
    
    const date = Number(sessionStorage.getItem('expires'));
    const actualDate = new Date();
    actualDate.setTime(date);

    if( actualDate < new Date()){
      console.log("El token no es válido");
      return false;
    }
    return true;
  }

  getUser(){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    return this.http.get(`${this.url}getStudent` , {headers: headers});
  }

  becomeTutor(des:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    const data = {
      description: des
    }
   return this.http.post(`${this.url}registerTutor`, data,{headers})
  }

  addSubject(id:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${this.readToken()}`
    });
    const data = {
      idCourse: id
    }
   return this.http.post(`${this.url}addCourseTutor`, data,{headers})
  }

  //Servicio que me indica si el usuario ya está registrado o no
  isRegistered(email:string){
    return false;
  }

  typeStudent(email:string){
    return this.http.get(`${this.url}typeStudent/${email}`);
  }

  signUpGoogle(student:StudentModel, googleToken:string){
    const authData = {...student};
    const headers = new HttpHeaders({
      'authorization': `bearer ${googleToken}`
    });
    return this.http.post(`${this.url}signUpGoogle`, authData, {headers});
  }

  signInGoogle(googleToken: string, userEmail:string){
    const headers = new HttpHeaders({
      'authorization': `bearer ${googleToken}`
    });

    const data = {
      email:userEmail
    }
    return this.http.post(`${this.url}signInGoogle`, data, {headers}).pipe(
      map( resp => {
        this.saveToken( resp['token'] );
        return resp;
      })
    );
  }
}

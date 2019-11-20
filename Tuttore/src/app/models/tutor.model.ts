import { SubjectModel } from './subjects.model';


export class TutorModel {_
idTutor:string;
name:string;
lastName:string;
career:string;
email:string;
gpa:string;
phoneNumber:string;
courses: SubjectModel[];
dateCreatedTutor:string;
description:string;
profilePicture:string[];
isTutor: boolean = true;
}

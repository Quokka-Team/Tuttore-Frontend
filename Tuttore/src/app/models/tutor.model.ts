import { SubjectModel } from './subjects.model';


export class TutorModel {_
_id:string;
name:string;
lastName:string;
career:string;
email:string;
gpa:string;
phoneNumber:string;
courses: SubjectModel[];
dateCreatedTutor:string;
description:string;
ProfilePicture:string;
isTutor: boolean = true;
}

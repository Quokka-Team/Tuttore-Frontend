import { Injectable } from "@angular/core";
import { Message } from "../models/chat.model";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable, merge, forkJoin, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class ChatService {
  public chats: Message[] = [];
  private itemsCollection: AngularFirestoreCollection<any>;
  private idChat:string;
  public user1id:string;

  constructor(private afs: AngularFirestore) {}

  getIdChat( user2id: string) {
    let user1id = localStorage.getItem('mail');

    let resp1 :Observable<any> = this.afs.collection("chats", ref =>  ref.where("userId1", "==", user1id).where("userId2", "==", user2id)).valueChanges({ idField: "id" });

    let resp2 :Observable<any> = this.afs.collection("chats", ref =>  ref.where("userId2", "==", user1id).where("userId1", "==", user2id)).valueChanges({ idField: "id" });


    return combineLatest<any[]>(resp2,resp1).pipe(
      map(arr => arr.reduce((acc,cur)=> acc.concat(cur) )
    )
    )
  }

  loadMessages( user2id: string, documentId: string) {
     this.user1id = localStorage.getItem('mail');
    this.idChat=documentId
     
    return this.afs
      .collection("chats", ref =>
        ref.where("userId1", "==", this.user1id).where("userId2", "==", user2id)
      )
      .doc(documentId)
      .collection("messages",ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  addMessage(text: string) {
    let message: Message = {
      ownerId: this.user1id,
      message: text,
      date: new Date().getTime(),
    };
    
     return this.afs.collection("chats").doc(this.idChat).collection("messages").add(message)
     .then(() => {
       
      this.afs.collection("chats").doc(this.idChat).update( {lastmessage: message.message,
       lastmessagedate: message.date});
     })
     .catch(err => console.error("No se pudo enviar el mensaje", err));
  }

   async createChat(text: string,user2id:string) {
    let message: Message = {
      ownerId: localStorage.getItem('mail'),
      message: text,
      date: new Date().getTime(),
    };
    let a = await this.afs.collection("chats").add(
      {
        lastmessage: message.message,
        lastmessagedate: message.date,
        userId1:localStorage.getItem('mail'),
        userId2: user2id,
       
      }
    )
    return this.afs.collection("chats").doc(a.id).collection("messages")
    .add(message);
    
  }




  getChatList(){
    this.user1id = localStorage.getItem('mail');
    let resp1 :Observable<any> = this.afs.collection("chats", ref =>  ref.where("userId1", "==", this.user1id).orderBy("lastmessagedate",'desc')).valueChanges();
    let resp2 :Observable<any> = this.afs.collection("chats", ref =>  ref.where("userId2", "==", this.user1id).orderBy("lastmessagedate",'desc')).valueChanges();
    
    return combineLatest<any[]>(resp2,resp1).pipe(
      map(arr => arr.reduce((acc,cur)=> acc.concat(cur) )
    )
    )
  }
}

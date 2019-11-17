import { Injectable } from "@angular/core";
import { Message } from "../models/chat.model";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class ChatService {
  public chats: Message[] = [];
  private itemsCollection: AngularFirestoreCollection<any>;
  private idChat:string;

  constructor(private afs: AngularFirestore) {}

  loadDocument( user2id: string) {
    let user1id = localStorage.getItem('mail');
    console.log(user1id,user2id);
    
    this.itemsCollection = this.afs.collection("chats", ref =>
      ref.where("userId1", "==", user1id).where("userId2", "==", user2id)    );
    return this.itemsCollection.valueChanges({ idField: "id" });
  }

  loadMessages( user2id: string, documentId: string) {
    let user1id = localStorage.getItem('mail');
    this.idChat=documentId
     
    return this.afs
      .collection("chats", ref =>
        ref.where("userId1", "==", user1id).where("userId2", "==", user2id)
      )
      .doc(documentId)
      .collection("messages",ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  addMessage(text: string) {
    let id = localStorage.getItem('email');
    let messsage: Message = {
      ownerId: id,
      message: text,
      date: new Date().getTime()
    };
   
    return this.afs.collection("chats").doc(this.idChat).collection("messages").add(messsage);
  }
}

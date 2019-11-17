import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  username: string;
  person: string;
  message: string = "";
  messages: any[] = [];
  elemento: any;
   user2Id: string ;

  // user2Id: string = "456";

  
  constructor(
    public chatService: ChatService,
    private activatedRoute: ActivatedRoute
    ) { }

  sendMessage() {
    if (this.message.length === 0) {
      return;
    }

    this.chatService
      .addMessage(this.message)
      .then(() => (this.message = ""))
      .catch(err => console.error("No se pudo enviar", err));
  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");

    this.activatedRoute.params.subscribe(routeParams => {
      this.person = routeParams.username;
    });
    this.user2Id = this.person;
    this.chatService.loadDocument(this.user2Id).subscribe(chats => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 200);
      console.log(chats);
      
      this.chatService
        .loadMessages(this.user2Id, chats[0].id)
        .subscribe(messages => (this.messages = messages.reverse()));
    });
  }
}

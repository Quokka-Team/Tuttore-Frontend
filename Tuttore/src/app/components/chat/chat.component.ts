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
  message: string = "";
  messages: any[] = [];
  elemento: any;
  user2Id: string;
  chats: any[] = [];
  myUser: string;

  // user2Id: string = "456";

  constructor(
    public chatService: ChatService,
    private activatedRoute: ActivatedRoute
  ) {}

  sendMessage() {
    if (this.message.length === 0) {
      return;
    }
    this.chatService.addMessage(this.message)
    .then(() => this.message="")
     .catch(err => console.error("No se pudo enviar el mensaje", err));
      
  }

  ngOnInit() {
    this.myUser = localStorage.getItem('mail');
    this.elemento = document.getElementById("app-mensajes");
    this.chatService.getChatList().subscribe(chats => {

      this.chats = chats
      
      
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.user2Id = routeParams.username;
      
      
      if (routeParams.username) {
        this.chatService.getIdChat(this.user2Id).subscribe(chats => {
          
          this.chatService  .loadMessages(this.user2Id, chats[0].id)
            .subscribe(messages => {
             
              
              this.messages = messages.reverse();
              setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
              }, 20);
            });
        });
      }
    });
  }
}

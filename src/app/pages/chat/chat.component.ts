import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatserviceService } from '../../services/service-chat/chatservice.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  chatForm: FormGroup;

  constructor(private chatService: ChatserviceService) {
    this.chatForm = new FormGroup({
      message: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.chatService.getMessages().subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  sendMessage(): void {
    const message = this.chatForm.controls['message'].value;
    if (message.trim() !== '') {
      const newMessage = { user: 'user1', text: message, timestamp: new Date() };
      this.chatService.sendMessage(newMessage).subscribe(
        (data) => {
          this.messages.push(data);
          this.chatForm.reset();
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }
}

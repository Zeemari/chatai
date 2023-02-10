import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-in',
  templateUrl: './chat-in.component.html',
  styleUrls: ['./chat-in.component.scss'],
})
export class ChatInComponent implements OnInit {
  messages: any = [];
  inputMessage = '';
  apiKey = 'KOQwytSfua4vFNt1';
  baseUrl =
    'http://api.brainshop.ai/get?bid=172583&key=KOQwytSfua4vFNt1&uid=[uid]&msg=[msg]';

  constructor() {}

  ngOnInit(): void {}

  // async sendMessage() {
  //   const response = await this.http
  //     .post(`${this.baseUrl}/chat`, {
  //       apiKey: this.apiKey,
  //       text: this.inputMessage,
  //     })
  //     .toPromise();
  //   if (response !== undefined) {
  //     this.messages.push({ text: response, from: 'bot' });
  //   }
  //   this.inputMessage = '';
  // }

  // async sendMessage() {
  //   this.messages.push({ text: this.inputMessage, from: 'user' });
  //   const response = await this.http
  //     .post(`${this.baseUrl}/chat`, {
  //       apiKey: this.apiKey,
  //       text: this.inputMessage,
  //     })
  //     .toPromise();
  //   this.messages.push({ text: response['text'], from: 'bot' });
  //   this.inputMessage = '';
  // }
}

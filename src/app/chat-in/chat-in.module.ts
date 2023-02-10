import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatInRoutingModule } from './chat-in-routing.module';
import { ChatInComponent } from './chat-in.component';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCAFYfRwIPzw8ZJXOU-PY2ifNsQGuVAna4',
//   authDomain: 'chatai-49752.firebaseapp.com',
//   projectId: 'chatai-49752',
//   storageBucket: 'chatai-49752.appspot.com',
//   messagingSenderId: '276441661511',
//   appId: '1:276441661511:web:25fd54bd00f9a840ecb162',
//   measurementId: 'G-BSZR46VDFJ',
// };

@NgModule({
  declarations: [ChatInComponent],
  imports: [CommonModule, ChatInRoutingModule],
})
export class ChatInModule {}

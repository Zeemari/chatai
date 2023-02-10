import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatInComponent } from './chat-in.component';

const routes: Routes = [{ path: '', component: ChatInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatInRoutingModule { }

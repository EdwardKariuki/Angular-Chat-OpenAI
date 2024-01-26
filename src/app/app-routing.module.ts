import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './modules/customer-support/customer-support.component';
import { DefaultPromptsComponent } from './modules/defaultprompts/defaultprompts.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'defaultprompts', component: DefaultPromptsComponent  },
{ path: 'defaultprompts/chat-with-support-bot', component: CustomerSupportComponent  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  HeaderComponent,
  HomeComponent,
  DefaultPromptsComponent,
  HeaderComponent
]

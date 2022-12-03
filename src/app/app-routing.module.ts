import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { SkockoComponent } from './skocko/skocko.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:"questions",component:QuestionComponent},
   {path:"skocko",component:SkockoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

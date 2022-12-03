import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './number/number.component'; 
import { QuestionComponent } from './question/question.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:"questions",component:QuestionComponent},
  {path:"number",component:NumberComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

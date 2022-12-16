import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { MainComponent } from './skocko/main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartGameComponent } from './skocko/start-game/start-game.component';
import { MynumberComponent } from './mynumber/mynumber.component';
import { Directive } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: "full" },
  { path: 'welcome', component: WelcomeComponent },
  { path: "questions", component: QuestionComponent },
  { path: "main", component: MainComponent },
  { path: "skocko", component: StartGameComponent },
  { path: "mynumber", component: MynumberComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

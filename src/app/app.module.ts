import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GuesInputComponent } from './skocko/gues-input/gues-input.component';
import { GuesListComponent } from './skocko/gues-list/gues-list.component';
import { GuesRowComponent } from './skocko/gues-row/gues-row.component';
import { MainComponent } from './skocko/main/main.component';
import { StartGameComponent } from './skocko/start-game/start-game.component';
import { QuestionComponent } from './question/question.component';
;
import { FormsModule } from '@angular/forms';
import { MynumberComponent } from './mynumber/mynumber.component';
import { CalculatorLogicComponent } from './mynumber/calculator-logic/calculator-logic.component';
import { BrainComponent } from './mynumber/brain/brain.component';
import { ChangeBgDirective } from './skocko/change-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    GuesInputComponent,
    GuesListComponent,
    GuesRowComponent,
    MainComponent,
    StartGameComponent,
    QuestionComponent,
    MynumberComponent,
    CalculatorLogicComponent,
    BrainComponent,
    ChangeBgDirective



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

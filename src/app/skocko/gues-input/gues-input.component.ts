
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gues-input',
  templateUrl: './gues-input.component.html',
  styleUrls: ['./gues-input.component.css']
})
export class GuesInputComponent implements OnInit {

  @Input() gameSymbolsArr: any;
  @Input() resultFieldNumber: any;
  @Output() submitGuesEvent = new EventEmitter()
  public currentGuess: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  submitGues() {
    console.log(`main`, this.currentGuess);
    this.currentGuess;
    this.submitGuesEvent.emit(this.currentGuess)
    this.currentGuess = [];
  };

  apentSibmolToGues(simbolId: number) {

    if (this.currentGuess.length >=
      this.resultFieldNumber) {
      alert("Max number symbols is 4")

      return;
    }

    this.currentGuess.push(simbolId);



  }

}



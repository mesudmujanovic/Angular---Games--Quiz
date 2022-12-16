import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GameSymbol } from '../main/IGamesSybmol';
import guesValidator from './guesValidator'
@Component({
  selector: 'app-gues-list',
  templateUrl: './gues-list.component.html',
  styleUrls: ['./gues-list.component.css']
})
export class GuesListComponent implements OnInit, OnInit, OnChanges {

  @Input() finalResult: any = [];
  @Input() guessListArr: any;

  public guessListData: any = [];

  constructor() { }

  ngOnInit(): void {

    const guesMatch = guesValidator([1, 2, 3, 4], [1, 2, 4, 3]);



  };
  ngOnChanges(data: any): void {

    this.guessListData = []
    if (data.guessListArr !== undefined) {
      const freshGuessListArr = data.guessListArr.currentValue
      freshGuessListArr.forEach((guess: any) => {

        const guesMatch = guesValidator(this.finalResult, guess);



        this.guessListData.push({ guess, guesMatch })


      })
    }
  }

};
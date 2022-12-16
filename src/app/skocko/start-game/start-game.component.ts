
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  @Input() resultFieldNumber: any;
  @Input() gameSymbolsArr: any;
  @Output() generateResultEvent = new EventEmitter();




  constructor() { }

  ngOnInit(): void {
    this.generateResult()


  }


  generateResult() {
    const resultArr = [];
    for (let i = 0; i < this.resultFieldNumber; i++) {
      const randomIndex = Math.floor(Math.random() * this.gameSymbolsArr.length);
      const randomGameSymbol = this.gameSymbolsArr[randomIndex];
      resultArr.push(randomGameSymbol.id);
    };
    this.generateResultEvent.emit(resultArr);
  };

}

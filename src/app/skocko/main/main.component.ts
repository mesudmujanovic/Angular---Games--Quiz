import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public resultFieldNumber = 4;

  public finalResult: any;
  public guessListArr: any = [];
  public allowedGuesses = 6;

  public gameSymbolsArrMainData = [
    {
      id: "1", name: "pik", imageUrls: 'assets/image/pik.jpg'
    },
    {
      id: "2", name: "skocko",
      imageUrls: 'assets/image/skocko.png'
    },
    { id: "3", name: "sova", imageUrls: 'assets/image/sova.jpg' },
    { id: "4", name: "srce", imageUrls: 'assets/image/srce.jpg' },
    { id: "5", name: "tref", imageUrls: 'assets/image/tref.jpg' },
    { id: "6", name: "zvezda", imageUrls: 'assets/image/zvezda.jpg' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  generateResultHandler(_finalResult: any) {
    this.finalResult = _finalResult;

    console.log(this.finalResult);


  }

  submitGuesHandle(guessValue: number[]) {
    this.guessListArr = [...this.guessListArr, guessValue];
    if (this.guessListArr.length >= this.allowedGuesses) {
      alert("GAME OVER")
    }

  }

}

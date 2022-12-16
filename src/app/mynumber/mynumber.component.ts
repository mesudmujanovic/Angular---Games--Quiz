import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-mynumber',
  templateUrl: './mynumber.component.html',
  styleUrls: ['./mynumber.component.css']
})
export class MynumberComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }

  GenerateRezultatEvent(brain: any) {
    let brainCalculator = [];
    brainCalculator = brain;
    console.log(`brain`, brainCalculator);

  }

  GenerateRezultHandler(calculator: any) {
    let calculatorResult = []
    calculatorResult = calculator;

    console.log(`calc`, calculatorResult);

  }

}





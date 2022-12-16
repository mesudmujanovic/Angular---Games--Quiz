import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-calculator-logic',
  templateUrl: './calculator-logic.component.html',
  styleUrls: ['./calculator-logic.component.css']
})
export class CalculatorLogicComponent implements OnInit {


  @Output() GenerateEqualsEmiter = new EventEmitter();
  @Output() GenerateInputEmitter = new EventEmitter()

  public counter: number = 60
  public intervall: any
  public toShow: any;
  public currValue: string = '';
  public brojj4: number = 0

  constructor() { }

  ngOnInit(): void {

    this.Timer()
  }
  GenerateStartResult() {
    const num = []
    this.brojj4 = this.brojj4 = Math.floor(Math.random() * 999);
    num.push(this.brojj4)
    console.log(num);
  }


  equals() {
    this.toShow = eval(this.currValue)
    if (this.toShow === this.brojj4) {
      alert("win")
    } else {
      alert("loss");
    }
    this.GenerateEqualsEmiter.emit(this.toShow);


  }

  writeToInput(value: string) {
    this.currValue = this.currValue + value;
    this.toShow = this.currValue;
    this.GenerateInputEmitter.emit(this.toShow)
  }

  clear() {
    this.toShow = '0'
  }

  back() {
    this.currValue = this.currValue.slice(0, -1);
    this.toShow = this.currValue;
  }

  Timer() {
    this.intervall = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        alert("Game Over")

      }
    })
    setTimeout(() => {
      this.intervall.unsubscribe()
    }, 60000)
  }



}

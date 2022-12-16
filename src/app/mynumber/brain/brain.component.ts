import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.css']
})
export class BrainComponent implements OnInit {



  public brojj1: number = 0
  public brojj2: number = 0
  public brojj3: number = 0
  public brojj4: number = 0
  public brojj5: number = 0
  public brojj6 = Array(5, 10, 15, 20);
  public brojj7 = Array(25, 50, 75, 100);
  brojod5do25: any = 0;
  brojod25do100: any = 0



  @Output() GenerateRezultatEvent = new EventEmitter();

  constructor() { }





  ngOnInit(): void {



  }




  broj1() {
    this.brojj1 = Math.floor(Math.random() * 11);


  }


  broj2() {
    this.brojj2 = Math.floor(Math.random() * 11);
  }

  broj3() {
    this.brojj3 = Math.floor(Math.random() * 11);
  }

  broj5() {
    this.brojj5 = Math.floor(Math.random() * 11);
  }

  broj6() {
    this.brojod5do25 = this.brojj6[Math.floor(this.brojj6.length * Math.random())]
  }

  broj7() {
    this.brojod25do100 = this.brojj7[Math.floor(this.brojj7.length * Math.random())]




  }



}

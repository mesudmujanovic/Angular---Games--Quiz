import { Component, OnInit,ElementRef,Directive, Input } from '@angular/core';

@Component({
  selector: 'app-skocko',
  templateUrl: './skocko.component.html',
  styleUrls: ['./skocko.component.css']
})
export class SkockoComponent implements OnInit {

 public znak:string[]=[]



public combination:number=0;



  constructor() {
   
   }


  ngOnInit(): void {

  }


  

  startGame(){
  }

 


  setMyTry(){
  }

}

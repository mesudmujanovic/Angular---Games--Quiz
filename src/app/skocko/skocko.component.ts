import { Component, OnInit,NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-skocko',
  templateUrl: './skocko.component.html',
  styleUrls: ['./skocko.component.css']
})
export class SkockoComponent implements OnInit {


  constructor() {}
  
    trenutni = [
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
    ];
    
    
    trenutniRezultat = [
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
      [-1,-1,-1,-1],
    ];



    
       symbol=[
 {id:"0",name:"pik",url:'skocko/image/pik.jpg'},
  {id:"1",name:"skocko",url:'skocko/image/skocko.png'},
  {id:"2",name:"sova",url:'skocko/image/sova.jpg'},
  {id:"3",name:"srce",url:'skocko/image/srce.jpg'},
  {id:"4",name:"tref",url:'skocko/image/tref.jpg'},
  {id:"5",name:"zvezda",url:'skocko/image/zvezda.jpg'},
]
    trenutniRed = 0;
    brojac:number=0;
    
    brojevi = [0,1,2,3,4,5]

    dobitnaKombinacija = [3,1,1,3];
  unetaKombinacija=      [1,3,1,3];
matchArr=[2,2,2,2];

 

  pogodtci(dobitnaKombinacija:any,unetaKombinacija:any){
this.matchArr=[];
this.dobitnaKombinacija= [... this.dobitnaKombinacija];
this.unetaKombinacija=[... this.unetaKombinacija];
dobitnaKombinacija.forEach((item:any,index:any) => {
if(item === unetaKombinacija[index]){
  delete this.unetaKombinacija[index];
  delete this.dobitnaKombinacija[index];
  this.matchArr.push(2);
};
});
 };

 zuti(dobitnaKombinacija:any,unetaKombinacija:any){
  unetaKombinacija.forEach((_:any,index:any)=>{
   const hasMatch:number=this.dobitnaKombinacija.findIndex(fitem=>{
  return  fitem === _;

}); if(hasMatch >= 0){
  delete dobitnaKombinacija[hasMatch];
  delete unetaKombinacija[index];
  this.matchArr.push(1);
  
  };
  
})

for(let item of unetaKombinacija){
  if(item){
    this.matchArr.push(0);
  }
}
console.log(this.matchArr);
 }

////
  ngOnInit(): void {
   this.dobitnaKombinacija.map(item=> Math.floor(Math.random()*6));
    console.log(this.dobitnaKombinacija);
    
        
    this.pogodtci(this.dobitnaKombinacija,this.unetaKombinacija);
    this.zuti(this.dobitnaKombinacija,this.unetaKombinacija);
  
    
    
  };

  popuniTabelu(znak: any) {
    for (let i = 0;i<this.trenutni[this.trenutniRed].length;i++) {
      if (this.trenutni[this.trenutniRed][i]==-1) {
        this.trenutni[this.trenutniRed][i] = +znak.id;
        
      break;
      }  
    }
 
};





  mapToSign(broj:any) {
    if (broj==-1)
      return ' -1 '; 
    return this.symbol[broj].name;
    
  };

 

 }


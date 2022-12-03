import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questionList: any =[];
  public currentQuestion:number=0;
  public points:number=0;
  progress:string="0";
  counter=60;
  public correctAnswer=0;
  public inccoretAnswer=0;
  public intervall:any;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
   
    this.getAllQuestions();
  this.startCounter();
  }

  getAllQuestions(){
    this.questionService.getQuestionsJson().subscribe(res=>{
      this.questionList=res.questions
    
    })
  }

  nextQuestion(){
    this.currentQuestion++
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQns:number,option:any){
if(option.correct){
this.points +=10;
this.correctAnswer++;
this.currentQuestion++;
this.getProgressPercent();
}else{
  this.points-=10;
  this.currentQuestion++;
  this.inccoretAnswer++;
  this.getProgressPercent();
}
}

startCounter(){
  this.intervall= interval(1000).subscribe(val=>{
    this.counter--;
    if(this.counter===0){
      this.currentQuestion++;
      this.points-=10;
      this.counter=60;
    }
  });
  setTimeout(()=>{
this.intervall.unsubscribe()
  },600000)

}

stopCounter(){
this.intervall.unsubscribe();
this.counter=0;
}

resetCounter(){
this.stopCounter();
this.counter=60;
this.startCounter();
}

resetQuiz(){
  this.resetCounter();
  this.getAllQuestions();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
  this.getProgressPercent();
}

getProgressPercent(){
  this.progress= ((this.currentQuestion/this.questionList.length)*100).toString();
  return this.progress
}



}

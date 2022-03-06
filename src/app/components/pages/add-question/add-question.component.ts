import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm!: FormGroup;
  constructor(private service: QuestionService,private router: Router) { }
 
  ngOnInit(): void {
    this.questionForm = new FormGroup({
      no: new FormControl(),
      questionTitleA: new FormControl(),
      questionTitleB: new FormControl(),
      questionTitleC: new FormControl(),
      questionTitleD: new FormControl(),
      ans: new FormControl(),
    });
  }

  addQuestion(){
    let question = {
      no:this.questionForm.value.no,
      questionTitle: this.questionForm.value.questionTitle,
      titleOptionA: this.questionForm.value.titleOptionA,
      titleOptionB: this.questionForm.value.titleOptionB,
      titleOptionC: this.questionForm.value.titleOptionC,
      titleOptionD: this.questionForm.value.titleOptionD,
      ans: this.questionForm.value.ans,
    }
    this.service.addQuestion(question).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a question complete."){
        window.alert("เพิ่มข้อสอบเรียบร้อย");
        this.router.navigate(["/exam"]);
      }else{
        window.alert("เพิ่มข้อสอบไม่สำเร็จ !");
        this.router.navigate(["/question/add"]);
      }
      
    });
  }

}
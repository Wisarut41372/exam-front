import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : any;
  
  constructor(private service : StudentService, private router : Router) { }
 

  ngOnInit(): void {
    this.service.getStudents().subscribe((res:any)=>{
      this.students = res.data;
    })
  }

}

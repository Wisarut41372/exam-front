import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = `${environment.serviceUrl}/user`
  constructor(private http: HttpClient) { }

  getStudents() : any{
    return this.http.get<any>(this.url);
  }

  //เพิ่มนักเรียน
  addStudent(student: any){
    return this.http.post<any>(this.url,student)
    .pipe(map((res)=>{
      return res;
    }));
  }

  //อัพเดทนักเรียน
  updateStudent(student: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,student)
    .pipe(map((res)=>{
      return res;
    }));
  }
  getStudentById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = `${environment.serviceSpringUrl}/question`;
  constructor(private http: HttpClient) { }

  
  getQuestions() : any{
    return this.http.get<any>(this.url);
  }
  
  addQuestion(question: any){
    return this.http.post<any>(this.url,question)
    .pipe(map((res)=>{
      return res;
    }));
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})

export class QuestionsComponent {

  readonly ROOT_URL = 'http://localhost:8083/api/';

  questions: any;

  constructor(private http: HttpClient) {}

  getQuestions() {
    this.questions = this.http.get(this.ROOT_URL + 'questions')
    console.log(this.questions);
  }
}

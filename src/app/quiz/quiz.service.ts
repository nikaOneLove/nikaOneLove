import { Injectable } from '@angular/core';

import { Question } from './shared/question.model';
import { questions } from './constants/data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private score: number = 0;

  get scoreValue(): number {
    return this.score;
  }

  getQuestion(pageNumber: number): Question {
    return questions[pageNumber - 1];
  }

  increaseScore(): void {
    this.score++;
  }

  clear(): void {
    this.score = 0;
  }
}

import { Component, TemplateRef, ViewChild } from '@angular/core';

import { Question } from './shared/question.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  @ViewChild('questionTemplate', {static: true}) questionTemplate: TemplateRef<any>;
  @ViewChild('previewTemplate', {static: true}) previewTemplate: TemplateRef<any>;
  @ViewChild('finalTemplate', {static: true}) finalTemplate: TemplateRef<any>;

  isPreview: boolean = true;
  isFinal: boolean = false;

  question: Question;
  checked: boolean;
  questionNumber: number = 0;

  constructor(
    private quizService: QuizService,
  ) {
  }

  getTemplateName(): TemplateRef<any> {
    if (this.isPreview) {
      return this.previewTemplate;
    }
    if (this.isFinal) {
      return this.finalTemplate;
    }
    return this.questionTemplate;
  }

  start(): void {
    this.isPreview = false;
    this.next();
  }

  startAgain(): void {
    this.questionNumber = 1;
    this.quizService.clear();
    this.isFinal = false;
  }

  next(): void {
    this.checked = false;
    if (this.questionNumber === 10) {
      this.isFinal = true;
    } else {
      this.question = this.quizService.getQuestion(++this.questionNumber);
    }
  }

  updateCheck($event): void {
    this.checked = $event;
  }

  get score(): number {
    return this.quizService.scoreValue;
  }
}

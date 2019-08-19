import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/modules/material/material.module';
import { AnswerComponent } from './components/answer/answer.component';
import { AnswerGroupComponent } from './components/answer-group/answer-group.component';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [
    AnswerComponent,
    AnswerGroupComponent,
    QuizComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule {
}

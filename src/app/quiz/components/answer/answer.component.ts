import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  @Input() checked: boolean;
  @Output() checkedChange: EventEmitter<void> = new EventEmitter<void>();

  @Input() correctAnswer: boolean = false;

  innerChecked: boolean = false;

  constructor(
    private quizService: QuizService
  ) {
  }

  check() {
    if (!this.checked) {
      this.innerChecked = true;
      this.checkedChange.emit();
      if (this.correctAnswer) {
        this.quizService.increaseScore();
      }
    }
  }

}

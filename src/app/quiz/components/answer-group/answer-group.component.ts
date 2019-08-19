import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Answer } from '../../shared/question.model';

@Component({
  selector: 'app-answer-group',
  templateUrl: './answer-group.component.html',
  styleUrls: ['./answer-group.component.css']
})
export class AnswerGroupComponent {
  @Input() check: boolean = false;
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() answers: Answer[] = [];

  updateCheck(): void {
    this.check = true;
    this.checkChange.emit(true);
  }
}

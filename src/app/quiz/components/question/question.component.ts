import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() check: boolean;
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCheck(event: boolean): void {
    this.checkChange.emit(event);
  }

}

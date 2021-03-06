import {Component, Input, OnInit} from '@angular/core';
import {Subtask} from './subtask';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {

  @Input() subtask: Subtask;

  constructor() { }

  ngOnInit() {
  }

}

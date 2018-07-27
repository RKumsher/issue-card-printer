import { Component, OnInit } from '@angular/core';
import {IssueService} from '../issue.service';
import {Subtask} from '../subtask/subtask';

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.css']
})
export class SubtasksComponent implements OnInit {

  subtasks: Subtask[];

  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.getSubtasks();
  }

  delete(subtask: Subtask): void {
    this.issueService.deleteSubtask(subtask);
  }

  getSubtasks(): void {
    this.issueService.getSubtasks().subscribe(subtasks => this.subtasks = subtasks);
  }

}

import { Component, OnInit } from '@angular/core';
import {Subtask} from '../subtask/subtask';
import {IssueService} from '../issue.service';
import {StoryCard} from '../story-card/story-card';

@Component({
  selector: 'app-subtask-form',
  templateUrl: './subtask-form.component.html',
  styleUrls: ['./subtask-form.component.css']
})
export class SubtaskFormComponent implements OnInit {

  model = new Subtask();

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.issueService.addSubtask(this.model);
    const temp = this.model;
    this.model = new StoryCard();
    this.model.id = temp.id;
  }

}

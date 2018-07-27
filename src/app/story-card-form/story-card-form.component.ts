import {Component, OnInit} from '@angular/core';
import {StoryCard} from '../story-card/story-card';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-story-card-form',
  templateUrl: './story-card-form.component.html',
  styleUrls: ['./story-card-form.component.css']
})
export class StoryCardFormComponent implements OnInit {

  model = new StoryCard();

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.issueService.addStory(this.model);
    const temp = this.model;
    this.model = new StoryCard();
    this.model.id = temp.id;
  }

}

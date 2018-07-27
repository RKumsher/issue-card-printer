import { Component, OnInit } from '@angular/core';
import {StoryCard} from '../story-card/story-card';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-story-cards',
  templateUrl: './story-cards.component.html',
  styleUrls: ['./story-cards.component.css']
})
export class StoryCardsComponent implements OnInit {

  storyCards: StoryCard[];

  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.getStories();
  }

  delete(story: StoryCard): void {
    this.issueService.deleteStory(story);
  }

  getStories(): void {
    this.issueService.getStories().subscribe(stories => this.storyCards = stories);
  }

}

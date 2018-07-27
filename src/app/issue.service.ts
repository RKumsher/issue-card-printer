import {Injectable} from '@angular/core';
import {StoryCard} from './story-card/story-card';
import {of} from 'rxjs/observable/of';
import {Subtask} from './subtask/subtask';

@Injectable()
export class IssueService {

  storyCards = [];
  subtasks = [];

  addStory(story: StoryCard): void {
    this.storyCards.push(story);
  }

  deleteStory(story: StoryCard): void {
    const index = this.storyCards.indexOf(story, 0);
    if (index > -1) {
      this.storyCards.splice(index, 1);
    }
  }

  getStories() {
    return of(this.storyCards);
  }

  addSubtask(subtask: Subtask): void {
    this.subtasks.push(subtask);
  }

  deleteSubtask(subtask: Subtask): void {
    const index = this.subtasks.indexOf(subtask, 0);
    if (index > -1) {
      this.subtasks.splice(index, 1);
    }
  }

  getSubtasks() {
    return of(this.subtasks);
  }
}

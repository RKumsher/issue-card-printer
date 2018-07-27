import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoryCardFormComponent } from './story-card-form/story-card-form.component';
import { IssueService } from './issue.service';
import { StoryCardsComponent } from './story-cards/story-cards.component';
import { SubtaskComponent } from './subtask/subtask.component';
import { SubtasksComponent } from './subtasks/subtasks.component';
import { SubtaskFormComponent } from './subtask-form/subtask-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryCardComponent,
    StoryCardFormComponent,
    StoryCardsComponent,
    SubtaskComponent,
    SubtasksComponent,
    SubtaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

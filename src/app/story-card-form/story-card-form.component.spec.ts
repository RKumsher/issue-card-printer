import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardFormComponent } from './story-card-form.component';

describe('StoryCardFormComponent', () => {
  let component: StoryCardFormComponent;
  let fixture: ComponentFixture<StoryCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

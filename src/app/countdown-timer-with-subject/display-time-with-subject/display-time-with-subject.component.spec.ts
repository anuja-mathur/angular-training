import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimeWithSubjectComponent } from './display-time-with-subject.component';

describe('DisplayTimeWithSubjectComponent', () => {
  let component: DisplayTimeWithSubjectComponent;
  let fixture: ComponentFixture<DisplayTimeWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimeWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTimeWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTimeWithSubjectComponent } from './log-time-with-subject.component';

describe('LogTimeWithSubjectComponent', () => {
  let component: LogTimeWithSubjectComponent;
  let fixture: ComponentFixture<LogTimeWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTimeWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTimeWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

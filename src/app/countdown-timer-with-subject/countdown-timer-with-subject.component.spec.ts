import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerWithSubjectComponent } from './countdown-timer-with-subject.component';

describe('CountdownTimerWithSubjectComponent', () => {
  let component: CountdownTimerWithSubjectComponent;
  let fixture: ComponentFixture<CountdownTimerWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

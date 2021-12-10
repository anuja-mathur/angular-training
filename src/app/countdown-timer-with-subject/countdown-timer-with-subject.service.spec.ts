import { TestBed } from '@angular/core/testing';

import { CountdownTimerWithSubjectService } from './countdown-timer-with-subject.service';

describe('CountdownTimerWithSubjectService', () => {
  let service: CountdownTimerWithSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountdownTimerWithSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

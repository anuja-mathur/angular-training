import { TestBed } from '@angular/core/testing';

import { StudentsRecordService } from './students-record.service';

describe('StudentsRecordService', () => {
  let service: StudentsRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

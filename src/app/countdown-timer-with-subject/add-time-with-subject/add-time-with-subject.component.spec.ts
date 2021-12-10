import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeWithSubjectComponent } from './add-time-with-subject.component';

describe('AddTimeWithSubjectComponent', () => {
  let component: AddTimeWithSubjectComponent;
  let fixture: ComponentFixture<AddTimeWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimeWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

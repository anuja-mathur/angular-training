import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCountWithSubjectComponent } from './click-count-with-subject.component';

describe('ClickCountWithSubjectComponent', () => {
  let component: ClickCountWithSubjectComponent;
  let fixture: ComponentFixture<ClickCountWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCountWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCountWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

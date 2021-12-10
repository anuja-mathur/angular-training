import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBlocksComponent } from './dynamic-blocks.component';

describe('DynamicBlocksComponent', () => {
  let component: DynamicBlocksComponent;
  let fixture: ComponentFixture<DynamicBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

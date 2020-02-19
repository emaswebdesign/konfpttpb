import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopEduardoKeganComponent } from './workshop-eduardo-kegan.component';

describe('WorkshopEduardoKeganComponent', () => {
  let component: WorkshopEduardoKeganComponent;
  let fixture: ComponentFixture<WorkshopEduardoKeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopEduardoKeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopEduardoKeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

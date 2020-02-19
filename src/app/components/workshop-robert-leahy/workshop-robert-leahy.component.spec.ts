import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopRobertLeahyComponent } from './workshop-robert-leahy.component';

describe('WorkshopRobertLeahyComponent', () => {
  let component: WorkshopRobertLeahyComponent;
  let fixture: ComponentFixture<WorkshopRobertLeahyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopRobertLeahyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopRobertLeahyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

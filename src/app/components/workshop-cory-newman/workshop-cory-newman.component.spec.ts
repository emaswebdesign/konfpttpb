import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCoryNewmanComponent } from './workshop-cory-newman.component';

describe('WorkshopCoryNewmanComponent', () => {
  let component: WorkshopCoryNewmanComponent;
  let fixture: ComponentFixture<WorkshopCoryNewmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopCoryNewmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopCoryNewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

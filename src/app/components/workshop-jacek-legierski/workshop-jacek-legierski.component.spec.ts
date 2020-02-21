import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopJacekLegierskiComponent } from './workshop-jacek-legierski.component';

describe('WorkshopJacekLegierskiComponent', () => {
  let component: WorkshopJacekLegierskiComponent;
  let fixture: ComponentFixture<WorkshopJacekLegierskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopJacekLegierskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopJacekLegierskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

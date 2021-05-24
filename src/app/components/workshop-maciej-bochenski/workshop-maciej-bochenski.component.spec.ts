import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMaciejBochenskiComponent } from './workshop-maciej-bochenski.component';

describe('WorkshopMaciejBochenskiComponent', () => {
  let component: WorkshopMaciejBochenskiComponent;
  let fixture: ComponentFixture<WorkshopMaciejBochenskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMaciejBochenskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMaciejBochenskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCentrumneuroComponent } from './workshop-centrumneuro.component';

describe('WorkshopCentrumneuroComponent', () => {
  let component: WorkshopCentrumneuroComponent;
  let fixture: ComponentFixture<WorkshopCentrumneuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopCentrumneuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopCentrumneuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

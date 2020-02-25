import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopEwaPopielComponent } from './workshop-ewa-popiel.component';

describe('WorkshopEwaPopielComponent', () => {
  let component: WorkshopEwaPopielComponent;
  let fixture: ComponentFixture<WorkshopEwaPopielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopEwaPopielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopEwaPopielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

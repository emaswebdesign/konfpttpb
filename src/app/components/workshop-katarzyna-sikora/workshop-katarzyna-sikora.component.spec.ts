import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopKatarzynaSikoraComponent } from './workshop-katarzyna-sikora.component';

describe('WorkshopKatarzynaSikoraComponent', () => {
  let component: WorkshopKatarzynaSikoraComponent;
  let fixture: ComponentFixture<WorkshopKatarzynaSikoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopKatarzynaSikoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopKatarzynaSikoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

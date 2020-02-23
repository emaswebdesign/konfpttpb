import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAlicjaBaranekComponent } from './workshop-alicja-baranek.component';

describe('WorkshopAlicjaBaranekComponent', () => {
  let component: WorkshopAlicjaBaranekComponent;
  let fixture: ComponentFixture<WorkshopAlicjaBaranekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAlicjaBaranekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAlicjaBaranekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

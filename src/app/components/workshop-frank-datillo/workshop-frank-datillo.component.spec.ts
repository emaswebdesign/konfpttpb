import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFrankDatilloComponent } from './workshop-frank-datillo.component';

describe('WorkshopFrankDatilloComponent', () => {
  let component: WorkshopFrankDatilloComponent;
  let fixture: ComponentFixture<WorkshopFrankDatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopFrankDatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopFrankDatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

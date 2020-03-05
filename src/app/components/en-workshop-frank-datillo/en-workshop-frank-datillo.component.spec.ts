import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopFrankDatilloComponent } from './en-workshop-frank-datillo.component';

describe('EnWorkshopFrankDatilloComponent', () => {
  let component: EnWorkshopFrankDatilloComponent;
  let fixture: ComponentFixture<EnWorkshopFrankDatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopFrankDatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopFrankDatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

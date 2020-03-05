import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopFrankDatilloSecondComponent } from './en-workshop-frank-datillo-second.component';

describe('EnWorkshopFrankDatilloSecondComponent', () => {
  let component: EnWorkshopFrankDatilloSecondComponent;
  let fixture: ComponentFixture<EnWorkshopFrankDatilloSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopFrankDatilloSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopFrankDatilloSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankDatilloComponent } from './frank-datillo.component';

describe('FrankDatilloComponent', () => {
  let component: FrankDatilloComponent;
  let fixture: ComponentFixture<FrankDatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankDatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankDatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

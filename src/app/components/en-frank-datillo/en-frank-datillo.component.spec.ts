import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFrankDatilloComponent } from './en-frank-datillo.component';

describe('EnFrankDatilloComponent', () => {
  let component: EnFrankDatilloComponent;
  let fixture: ComponentFixture<EnFrankDatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnFrankDatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnFrankDatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

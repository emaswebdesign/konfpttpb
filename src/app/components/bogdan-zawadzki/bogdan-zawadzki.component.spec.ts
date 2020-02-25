import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogdanZawadzkiComponent } from './bogdan-zawadzki.component';

describe('BogdanZawadzkiComponent', () => {
  let component: BogdanZawadzkiComponent;
  let fixture: ComponentFixture<BogdanZawadzkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogdanZawadzkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogdanZawadzkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

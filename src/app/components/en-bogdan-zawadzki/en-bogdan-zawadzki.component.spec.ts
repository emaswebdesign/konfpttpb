import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnBogdanZawadzkiComponent } from './en-bogdan-zawadzki.component';

describe('EnBogdanZawadzkiComponent', () => {
  let component: EnBogdanZawadzkiComponent;
  let fixture: ComponentFixture<EnBogdanZawadzkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnBogdanZawadzkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnBogdanZawadzkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

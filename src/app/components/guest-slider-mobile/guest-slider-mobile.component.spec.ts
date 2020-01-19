import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSliderMobileComponent } from './guest-slider-mobile.component';

describe('GuestSliderMobileComponent', () => {
  let component: GuestSliderMobileComponent;
  let fixture: ComponentFixture<GuestSliderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSliderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSliderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

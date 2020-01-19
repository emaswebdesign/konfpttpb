import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGuestSliderMobileComponent } from './en-guest-slider-mobile.component';

describe('EnGuestSliderMobileComponent', () => {
  let component: EnGuestSliderMobileComponent;
  let fixture: ComponentFixture<EnGuestSliderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGuestSliderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGuestSliderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

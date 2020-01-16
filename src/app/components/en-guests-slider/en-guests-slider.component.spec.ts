import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGuestsSliderComponent } from './en-guests-slider.component';

describe('EnGuestsSliderComponent', () => {
  let component: EnGuestsSliderComponent;
  let fixture: ComponentFixture<EnGuestsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGuestsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGuestsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

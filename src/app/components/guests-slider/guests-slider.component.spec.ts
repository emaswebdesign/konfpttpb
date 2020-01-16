import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsSliderComponent } from './guests-slider.component';

describe('GuestsSliderComponent', () => {
  let component: GuestsSliderComponent;
  let fixture: ComponentFixture<GuestsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

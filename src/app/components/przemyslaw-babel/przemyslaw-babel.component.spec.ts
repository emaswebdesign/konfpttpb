import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzemyslawBabelComponent } from './przemyslaw-babel.component';

describe('PrzemyslawBabelComponent', () => {
  let component: PrzemyslawBabelComponent;
  let fixture: ComponentFixture<PrzemyslawBabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzemyslawBabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzemyslawBabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

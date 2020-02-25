import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnPrzemyslawBabelComponent } from './en-przemyslaw-babel.component';

describe('EnPrzemyslawBabelComponent', () => {
  let component: EnPrzemyslawBabelComponent;
  let fixture: ComponentFixture<EnPrzemyslawBabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnPrzemyslawBabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnPrzemyslawBabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

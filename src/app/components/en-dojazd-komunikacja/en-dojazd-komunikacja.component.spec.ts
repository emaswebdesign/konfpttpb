import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnDojazdKomunikacjaComponent } from './en-dojazd-komunikacja.component';

describe('EnDojazdKomunikacjaComponent', () => {
  let component: EnDojazdKomunikacjaComponent;
  let fixture: ComponentFixture<EnDojazdKomunikacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnDojazdKomunikacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnDojazdKomunikacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

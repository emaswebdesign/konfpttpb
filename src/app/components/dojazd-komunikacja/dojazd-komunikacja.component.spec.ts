import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojazdKomunikacjaComponent } from './dojazd-komunikacja.component';

describe('DojazdKomunikacjaComponent', () => {
  let component: DojazdKomunikacjaComponent;
  let fixture: ComponentFixture<DojazdKomunikacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojazdKomunikacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojazdKomunikacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

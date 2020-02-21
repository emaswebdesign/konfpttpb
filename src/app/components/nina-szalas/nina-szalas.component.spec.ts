import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaSzalasComponent } from './nina-szalas.component';

describe('NinaSzalasComponent', () => {
  let component: NinaSzalasComponent;
  let fixture: ComponentFixture<NinaSzalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinaSzalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaSzalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

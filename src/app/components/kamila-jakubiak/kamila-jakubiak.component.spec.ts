import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamilaJakubiakComponent } from './kamila-jakubiak.component';

describe('KamilaJakubiakComponent', () => {
  let component: KamilaJakubiakComponent;
  let fixture: ComponentFixture<KamilaJakubiakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamilaJakubiakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamilaJakubiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

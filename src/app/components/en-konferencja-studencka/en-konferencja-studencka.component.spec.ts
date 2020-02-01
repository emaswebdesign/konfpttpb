import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnKonferencjaStudenckaComponent } from './en-konferencja-studencka.component';

describe('EnKonferencjaStudenckaComponent', () => {
  let component: EnKonferencjaStudenckaComponent;
  let fixture: ComponentFixture<EnKonferencjaStudenckaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnKonferencjaStudenckaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnKonferencjaStudenckaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

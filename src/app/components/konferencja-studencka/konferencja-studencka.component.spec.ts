import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferencjaStudenckaComponent } from './konferencja-studencka.component';

describe('KonferencjaStudenckaComponent', () => {
  let component: KonferencjaStudenckaComponent;
  let fixture: ComponentFixture<KonferencjaStudenckaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonferencjaStudenckaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferencjaStudenckaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

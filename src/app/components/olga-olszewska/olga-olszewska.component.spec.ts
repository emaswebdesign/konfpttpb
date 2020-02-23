import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlgaOlszewskaComponent } from './olga-olszewska.component';

describe('OlgaOlszewskaComponent', () => {
  let component: OlgaOlszewskaComponent;
  let fixture: ComponentFixture<OlgaOlszewskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlgaOlszewskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlgaOlszewskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

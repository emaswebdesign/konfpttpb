import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoahimKowalskiComponent } from './joahim-kowalski.component';

describe('JoahimKowalskiComponent', () => {
  let component: JoahimKowalskiComponent;
  let fixture: ComponentFixture<JoahimKowalskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoahimKowalskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoahimKowalskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

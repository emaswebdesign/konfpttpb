import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstytutPsychologiiUjComponent } from './instytut-psychologii-uj.component';

describe('InstytutPsychologiiUjComponent', () => {
  let component: InstytutPsychologiiUjComponent;
  let fixture: ComponentFixture<InstytutPsychologiiUjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstytutPsychologiiUjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstytutPsychologiiUjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

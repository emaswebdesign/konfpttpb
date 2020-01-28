import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnInstytutPsychologiiUjComponent } from './en-instytut-psychologii-uj.component';

describe('EnInstytutPsychologiiUjComponent', () => {
  let component: EnInstytutPsychologiiUjComponent;
  let fixture: ComponentFixture<EnInstytutPsychologiiUjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnInstytutPsychologiiUjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnInstytutPsychologiiUjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

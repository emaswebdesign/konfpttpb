import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwaPraglowskaComponent } from './ewa-praglowska.component';

describe('EwaPraglowskaComponent', () => {
  let component: EwaPraglowskaComponent;
  let fixture: ComponentFixture<EwaPraglowskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwaPraglowskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwaPraglowskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEwaPraglowskaComponent } from './en-ewa-praglowska.component';

describe('EnEwaPraglowskaComponent', () => {
  let component: EnEwaPraglowskaComponent;
  let fixture: ComponentFixture<EnEwaPraglowskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEwaPraglowskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEwaPraglowskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

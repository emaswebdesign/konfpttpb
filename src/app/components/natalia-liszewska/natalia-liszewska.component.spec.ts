import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NataliaLiszewskaComponent } from './natalia-liszewska.component';

describe('NataliaLiszewskaComponent', () => {
  let component: NataliaLiszewskaComponent;
  let fixture: ComponentFixture<NataliaLiszewskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NataliaLiszewskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NataliaLiszewskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

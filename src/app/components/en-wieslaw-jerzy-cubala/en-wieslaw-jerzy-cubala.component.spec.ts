import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWieslawJerzyCubalaComponent } from './en-wieslaw-jerzy-cubala.component';

describe('EnWieslawJerzyCubalaComponent', () => {
  let component: EnWieslawJerzyCubalaComponent;
  let fixture: ComponentFixture<EnWieslawJerzyCubalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWieslawJerzyCubalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWieslawJerzyCubalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

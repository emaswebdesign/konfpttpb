import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WieslawJerzyCubalaComponent } from './wieslaw-jerzy-cubala.component';

describe('WieslawJerzyCubalaComponent', () => {
  let component: WieslawJerzyCubalaComponent;
  let fixture: ComponentFixture<WieslawJerzyCubalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WieslawJerzyCubalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WieslawJerzyCubalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

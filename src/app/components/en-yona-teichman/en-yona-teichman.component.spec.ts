import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnYonaTeichmanComponent } from './en-yona-teichman.component';

describe('EnYonaTeichmanComponent', () => {
  let component: EnYonaTeichmanComponent;
  let fixture: ComponentFixture<EnYonaTeichmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnYonaTeichmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnYonaTeichmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

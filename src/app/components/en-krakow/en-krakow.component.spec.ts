import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnKrakowComponent } from './en-krakow.component';

describe('EnKrakowComponent', () => {
  let component: EnKrakowComponent;
  let fixture: ComponentFixture<EnKrakowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnKrakowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnKrakowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

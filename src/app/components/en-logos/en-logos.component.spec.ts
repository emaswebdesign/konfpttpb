import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLogosComponent } from './en-logos.component';

describe('EnLogosComponent', () => {
  let component: EnLogosComponent;
  let fixture: ComponentFixture<EnLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

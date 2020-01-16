import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCoryNewmanComponent } from './en-cory-newman.component';

describe('EnCoryNewmanComponent', () => {
  let component: EnCoryNewmanComponent;
  let fixture: ComponentFixture<EnCoryNewmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCoryNewmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCoryNewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoryNewmanComponent } from './cory-newman.component';

describe('CoryNewmanComponent', () => {
  let component: CoryNewmanComponent;
  let fixture: ComponentFixture<CoryNewmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoryNewmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoryNewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

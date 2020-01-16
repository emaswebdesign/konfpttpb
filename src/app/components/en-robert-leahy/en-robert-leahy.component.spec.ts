import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnRobertLeahyComponent } from './en-robert-leahy.component';

describe('EnRobertLeahyComponent', () => {
  let component: EnRobertLeahyComponent;
  let fixture: ComponentFixture<EnRobertLeahyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnRobertLeahyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnRobertLeahyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

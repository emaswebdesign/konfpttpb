import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMobilenavComponent } from './en-mobilenav.component';

describe('EnMobilenavComponent', () => {
  let component: EnMobilenavComponent;
  let fixture: ComponentFixture<EnMobilenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMobilenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMobilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

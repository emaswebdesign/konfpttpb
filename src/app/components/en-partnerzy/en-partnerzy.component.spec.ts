import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnPartnerzyComponent } from './en-partnerzy.component';

describe('EnPartnerzyComponent', () => {
  let component: EnPartnerzyComponent;
  let fixture: ComponentFixture<EnPartnerzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnPartnerzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnPartnerzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerzyComponent } from './partnerzy.component';

describe('PartnerzyComponent', () => {
  let component: PartnerzyComponent;
  let fixture: ComponentFixture<PartnerzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

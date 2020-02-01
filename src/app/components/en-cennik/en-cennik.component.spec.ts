import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCennikComponent } from './en-cennik.component';

describe('EnCennikComponent', () => {
  let component: EnCennikComponent;
  let fixture: ComponentFixture<EnCennikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCennikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCennikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

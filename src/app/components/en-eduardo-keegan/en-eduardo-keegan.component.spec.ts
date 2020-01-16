import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEduardoKeeganComponent } from './en-eduardo-keegan.component';

describe('EnEduardoKeeganComponent', () => {
  let component: EnEduardoKeeganComponent;
  let fixture: ComponentFixture<EnEduardoKeeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEduardoKeeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEduardoKeeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduardoKeeganComponent } from './eduardo-keegan.component';

describe('EduardoKeeganComponent', () => {
  let component: EduardoKeeganComponent;
  let fixture: ComponentFixture<EduardoKeeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduardoKeeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduardoKeeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

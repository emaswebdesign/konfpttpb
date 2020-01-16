import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMeganavComponent } from './en-meganav.component';

describe('EnMeganavComponent', () => {
  let component: EnMeganavComponent;
  let fixture: ComponentFixture<EnMeganavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMeganavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMeganavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

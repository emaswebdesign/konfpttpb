import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMichaelaSwalesComponent } from './en-michaela-swales.component';

describe('EnMichaelaSwalesComponent', () => {
  let component: EnMichaelaSwalesComponent;
  let fixture: ComponentFixture<EnMichaelaSwalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMichaelaSwalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMichaelaSwalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

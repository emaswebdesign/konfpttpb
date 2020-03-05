import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopEduardoKeganComponent } from './en-workshop-eduardo-kegan.component';

describe('EnWorkshopEduardoKeganComponent', () => {
  let component: EnWorkshopEduardoKeganComponent;
  let fixture: ComponentFixture<EnWorkshopEduardoKeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopEduardoKeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopEduardoKeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

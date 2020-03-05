import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopCoryNewmanComponent } from './en-workshop-cory-newman.component';

describe('EnWorkshopCoryNewmanComponent', () => {
  let component: EnWorkshopCoryNewmanComponent;
  let fixture: ComponentFixture<EnWorkshopCoryNewmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopCoryNewmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopCoryNewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopReobertLeahyComponent } from './en-workshop-reobert-leahy.component';

describe('EnWorkshopReobertLeahyComponent', () => {
  let component: EnWorkshopReobertLeahyComponent;
  let fixture: ComponentFixture<EnWorkshopReobertLeahyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopReobertLeahyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopReobertLeahyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

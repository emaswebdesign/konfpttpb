import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopMichaelaSwalesComponent } from './en-workshop-michaela-swales.component';

describe('EnWorkshopMichaelaSwalesComponent', () => {
  let component: EnWorkshopMichaelaSwalesComponent;
  let fixture: ComponentFixture<EnWorkshopMichaelaSwalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopMichaelaSwalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopMichaelaSwalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

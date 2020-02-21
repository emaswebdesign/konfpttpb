import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMichaelaSwalesComponent } from './workshop-michaela-swales.component';

describe('WorkshopMichaelaSwalesComponent', () => {
  let component: WorkshopMichaelaSwalesComponent;
  let fixture: ComponentFixture<WorkshopMichaelaSwalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMichaelaSwalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMichaelaSwalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

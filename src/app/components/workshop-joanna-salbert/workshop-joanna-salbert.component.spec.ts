import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopJoannaSalbertComponent } from './workshop-joanna-salbert.component';

describe('WorkshopJoannaSalbertComponent', () => {
  let component: WorkshopJoannaSalbertComponent;
  let fixture: ComponentFixture<WorkshopJoannaSalbertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopJoannaSalbertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopJoannaSalbertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

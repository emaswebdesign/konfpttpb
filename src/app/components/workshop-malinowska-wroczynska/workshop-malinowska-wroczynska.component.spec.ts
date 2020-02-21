import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMalinowskaWroczynskaComponent } from './workshop-malinowska-wroczynska.component';

describe('WorkshopMalinowskaWroczynskaComponent', () => {
  let component: WorkshopMalinowskaWroczynskaComponent;
  let fixture: ComponentFixture<WorkshopMalinowskaWroczynskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMalinowskaWroczynskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMalinowskaWroczynskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

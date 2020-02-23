import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopNataliaLiszewskaComponent } from './workshop-natalia-liszewska.component';

describe('WorkshopNataliaLiszewskaComponent', () => {
  let component: WorkshopNataliaLiszewskaComponent;
  let fixture: ComponentFixture<WorkshopNataliaLiszewskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopNataliaLiszewskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopNataliaLiszewskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

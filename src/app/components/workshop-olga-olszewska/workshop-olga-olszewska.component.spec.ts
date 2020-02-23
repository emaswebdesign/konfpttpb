import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopOlgaOlszewskaComponent } from './workshop-olga-olszewska.component';

describe('WorkshopOlgaOlszewskaComponent', () => {
  let component: WorkshopOlgaOlszewskaComponent;
  let fixture: ComponentFixture<WorkshopOlgaOlszewskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopOlgaOlszewskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopOlgaOlszewskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

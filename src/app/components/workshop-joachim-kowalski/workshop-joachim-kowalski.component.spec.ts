import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopJoachimKowalskiComponent } from './workshop-joachim-kowalski.component';

describe('WorkshopJoachimKowalskiComponent', () => {
  let component: WorkshopJoachimKowalskiComponent;
  let fixture: ComponentFixture<WorkshopJoachimKowalskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopJoachimKowalskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopJoachimKowalskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

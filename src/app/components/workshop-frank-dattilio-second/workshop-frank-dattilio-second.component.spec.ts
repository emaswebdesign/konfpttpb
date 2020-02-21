import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFrankDattilioSecondComponent } from './workshop-frank-dattilio-second.component';

describe('WorkshopFrankDattilioSecondComponent', () => {
  let component: WorkshopFrankDattilioSecondComponent;
  let fixture: ComponentFixture<WorkshopFrankDattilioSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopFrankDattilioSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopFrankDattilioSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

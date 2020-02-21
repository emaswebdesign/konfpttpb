import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopHubertCzupalaComponent } from './workshop-hubert-czupala.component';

describe('WorkshopHubertCzupalaComponent', () => {
  let component: WorkshopHubertCzupalaComponent;
  let fixture: ComponentFixture<WorkshopHubertCzupalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopHubertCzupalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopHubertCzupalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

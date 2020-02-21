import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubertCzupalaComponent } from './hubert-czupala.component';

describe('HubertCzupalaComponent', () => {
  let component: HubertCzupalaComponent;
  let fixture: ComponentFixture<HubertCzupalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubertCzupalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubertCzupalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

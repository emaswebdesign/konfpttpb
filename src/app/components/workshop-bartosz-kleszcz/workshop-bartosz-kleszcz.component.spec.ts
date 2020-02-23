import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopBartoszKleszczComponent } from './workshop-bartosz-kleszcz.component';

describe('WorkshopBartoszKleszczComponent', () => {
  let component: WorkshopBartoszKleszczComponent;
  let fixture: ComponentFixture<WorkshopBartoszKleszczComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopBartoszKleszczComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopBartoszKleszczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

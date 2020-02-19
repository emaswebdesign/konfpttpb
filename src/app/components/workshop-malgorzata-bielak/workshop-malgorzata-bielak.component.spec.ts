import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMalgorzataBielakComponent } from './workshop-malgorzata-bielak.component';

describe('WorkshopMalgorzataBielakComponent', () => {
  let component: WorkshopMalgorzataBielakComponent;
  let fixture: ComponentFixture<WorkshopMalgorzataBielakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMalgorzataBielakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMalgorzataBielakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

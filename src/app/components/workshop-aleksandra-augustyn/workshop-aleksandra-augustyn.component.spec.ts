import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAleksandraAugustynComponent } from './workshop-aleksandra-augustyn.component';

describe('WorkshopAleksandraAugustynComponent', () => {
  let component: WorkshopAleksandraAugustynComponent;
  let fixture: ComponentFixture<WorkshopAleksandraAugustynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAleksandraAugustynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAleksandraAugustynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

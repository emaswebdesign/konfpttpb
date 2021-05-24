import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopKamilaJakubiakComponent } from './workshop-kamila-jakubiak.component';

describe('WorkshopKamilaJakubiakComponent', () => {
  let component: WorkshopKamilaJakubiakComponent;
  let fixture: ComponentFixture<WorkshopKamilaJakubiakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopKamilaJakubiakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopKamilaJakubiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

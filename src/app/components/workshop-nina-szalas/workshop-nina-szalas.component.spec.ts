import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopNinaSzalasComponent } from './workshop-nina-szalas.component';

describe('WorkshopNinaSzalasComponent', () => {
  let component: WorkshopNinaSzalasComponent;
  let fixture: ComponentFixture<WorkshopNinaSzalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopNinaSzalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopNinaSzalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopBrynskaSzalasComponent } from './workshop-brynska-szalas.component';

describe('WorkshopBrynskaSzalasComponent', () => {
  let component: WorkshopBrynskaSzalasComponent;
  let fixture: ComponentFixture<WorkshopBrynskaSzalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopBrynskaSzalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopBrynskaSzalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

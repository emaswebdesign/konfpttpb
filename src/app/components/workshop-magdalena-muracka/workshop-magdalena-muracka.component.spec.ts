import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMagdalenaMurackaComponent } from './workshop-magdalena-muracka.component';

describe('WorkshopMagdalenaMurackaComponent', () => {
  let component: WorkshopMagdalenaMurackaComponent;
  let fixture: ComponentFixture<WorkshopMagdalenaMurackaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMagdalenaMurackaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMagdalenaMurackaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

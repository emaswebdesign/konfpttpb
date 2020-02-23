import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopMalgorzataBerezaComponent } from './workshop-malgorzata-bereza.component';

describe('WorkshopMalgorzataBerezaComponent', () => {
  let component: WorkshopMalgorzataBerezaComponent;
  let fixture: ComponentFixture<WorkshopMalgorzataBerezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopMalgorzataBerezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopMalgorzataBerezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

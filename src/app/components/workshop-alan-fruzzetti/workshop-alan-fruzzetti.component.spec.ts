import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAlanFruzzettiComponent } from './workshop-alan-fruzzetti.component';

describe('WorkshopAlanFruzzettiComponent', () => {
  let component: WorkshopAlanFruzzettiComponent;
  let fixture: ComponentFixture<WorkshopAlanFruzzettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAlanFruzzettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAlanFruzzettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

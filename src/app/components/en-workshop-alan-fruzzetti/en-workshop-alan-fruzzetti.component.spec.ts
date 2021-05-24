import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWorkshopAlanFruzzettiComponent } from './en-workshop-alan-fruzzetti.component';

describe('EnWorkshopAlanFruzzettiComponent', () => {
  let component: EnWorkshopAlanFruzzettiComponent;
  let fixture: ComponentFixture<EnWorkshopAlanFruzzettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWorkshopAlanFruzzettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWorkshopAlanFruzzettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

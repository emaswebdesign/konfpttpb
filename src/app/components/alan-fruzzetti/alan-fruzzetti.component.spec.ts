import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanFruzzettiComponent } from './alan-fruzzetti.component';

describe('AlanFruzzettiComponent', () => {
  let component: AlanFruzzettiComponent;
  let fixture: ComponentFixture<AlanFruzzettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlanFruzzettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlanFruzzettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

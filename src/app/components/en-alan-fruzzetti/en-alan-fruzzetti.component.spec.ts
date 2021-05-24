import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAlanFruzzettiComponent } from './en-alan-fruzzetti.component';

describe('EnAlanFruzzettiComponent', () => {
  let component: EnAlanFruzzettiComponent;
  let fixture: ComponentFixture<EnAlanFruzzettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAlanFruzzettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAlanFruzzettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

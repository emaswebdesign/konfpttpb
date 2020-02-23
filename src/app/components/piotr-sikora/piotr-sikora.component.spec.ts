import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiotrSikoraComponent } from './piotr-sikora.component';

describe('PiotrSikoraComponent', () => {
  let component: PiotrSikoraComponent;
  let fixture: ComponentFixture<PiotrSikoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiotrSikoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiotrSikoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

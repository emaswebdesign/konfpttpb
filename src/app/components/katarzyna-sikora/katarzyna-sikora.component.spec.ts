import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatarzynaSikoraComponent } from './katarzyna-sikora.component';

describe('KatarzynaSikoraComponent', () => {
  let component: KatarzynaSikoraComponent;
  let fixture: ComponentFixture<KatarzynaSikoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatarzynaSikoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatarzynaSikoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

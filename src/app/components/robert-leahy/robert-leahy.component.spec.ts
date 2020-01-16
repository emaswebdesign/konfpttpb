import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertLeahyComponent } from './robert-leahy.component';

describe('RobertLeahyComponent', () => {
  let component: RobertLeahyComponent;
  let fixture: ComponentFixture<RobertLeahyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobertLeahyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertLeahyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

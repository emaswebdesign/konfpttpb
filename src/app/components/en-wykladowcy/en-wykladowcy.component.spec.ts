import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWykladowcyComponent } from './en-wykladowcy.component';

describe('EnWykladowcyComponent', () => {
  let component: EnWykladowcyComponent;
  let fixture: ComponentFixture<EnWykladowcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWykladowcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWykladowcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

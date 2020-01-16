import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WykladowcyComponent } from './wykladowcy.component';

describe('WykladowcyComponent', () => {
  let component: WykladowcyComponent;
  let fixture: ComponentFixture<WykladowcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WykladowcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WykladowcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

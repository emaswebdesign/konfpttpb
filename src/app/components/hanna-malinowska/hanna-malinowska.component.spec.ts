import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HannaMalinowskaComponent } from './hanna-malinowska.component';

describe('HannaMalinowskaComponent', () => {
  let component: HannaMalinowskaComponent;
  let fixture: ComponentFixture<HannaMalinowskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HannaMalinowskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HannaMalinowskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

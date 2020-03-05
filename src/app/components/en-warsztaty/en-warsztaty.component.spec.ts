import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWarsztatyComponent } from './en-warsztaty.component';

describe('EnWarsztatyComponent', () => {
  let component: EnWarsztatyComponent;
  let fixture: ComponentFixture<EnWarsztatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWarsztatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWarsztatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

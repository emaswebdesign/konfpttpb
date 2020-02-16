import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsztatyComponent } from './warsztaty.component';

describe('WarsztatyComponent', () => {
  let component: WarsztatyComponent;
  let fixture: ComponentFixture<WarsztatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarsztatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsztatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAuditoriumMaximumComponent } from './en-auditorium-maximum.component';

describe('EnAuditoriumMaximumComponent', () => {
  let component: EnAuditoriumMaximumComponent;
  let fixture: ComponentFixture<EnAuditoriumMaximumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAuditoriumMaximumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAuditoriumMaximumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

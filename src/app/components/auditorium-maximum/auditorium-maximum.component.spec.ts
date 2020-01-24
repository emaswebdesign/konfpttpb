import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumMaximumComponent } from './auditorium-maximum.component';

describe('AuditoriumMaximumComponent', () => {
  let component: AuditoriumMaximumComponent;
  let fixture: ComponentFixture<AuditoriumMaximumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriumMaximumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumMaximumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

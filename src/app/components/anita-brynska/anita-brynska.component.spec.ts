import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnitaBrynskaComponent } from './anita-brynska.component';

describe('AnitaBrynskaComponent', () => {
  let component: AnitaBrynskaComponent;
  let fixture: ComponentFixture<AnitaBrynskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnitaBrynskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnitaBrynskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

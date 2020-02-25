import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAnitaBrynskaComponent } from './en-anita-brynska.component';

describe('EnAnitaBrynskaComponent', () => {
  let component: EnAnitaBrynskaComponent;
  let fixture: ComponentFixture<EnAnitaBrynskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAnitaBrynskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAnitaBrynskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

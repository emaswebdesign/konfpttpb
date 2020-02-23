import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagdalenaMurackaComponent } from './magdalena-muracka.component';

describe('MagdalenaMurackaComponent', () => {
  let component: MagdalenaMurackaComponent;
  let fixture: ComponentFixture<MagdalenaMurackaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagdalenaMurackaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagdalenaMurackaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

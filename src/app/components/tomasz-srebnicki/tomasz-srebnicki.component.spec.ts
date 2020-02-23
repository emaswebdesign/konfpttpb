import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaszSrebnickiComponent } from './tomasz-srebnicki.component';

describe('TomaszSrebnickiComponent', () => {
  let component: TomaszSrebnickiComponent;
  let fixture: ComponentFixture<TomaszSrebnickiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaszSrebnickiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaszSrebnickiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

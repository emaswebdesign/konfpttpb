import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeganavComponent } from './meganav.component';

describe('MeganavComponent', () => {
  let component: MeganavComponent;
  let fixture: ComponentFixture<MeganavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeganavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeganavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

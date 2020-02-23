import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartoszKleszczComponent } from './bartosz-kleszcz.component';

describe('BartoszKleszczComponent', () => {
  let component: BartoszKleszczComponent;
  let fixture: ComponentFixture<BartoszKleszczComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartoszKleszczComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartoszKleszczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

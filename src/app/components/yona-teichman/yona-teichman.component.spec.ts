import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonaTeichmanComponent } from './yona-teichman.component';

describe('YonaTeichmanComponent', () => {
  let component: YonaTeichmanComponent;
  let fixture: ComponentFixture<YonaTeichmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonaTeichmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonaTeichmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

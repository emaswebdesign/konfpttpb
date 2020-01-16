import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHomePageComponent } from './en-home-page.component';

describe('EnHomePageComponent', () => {
  let component: EnHomePageComponent;
  let fixture: ComponentFixture<EnHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnInformacjeComponent } from './en-informacje.component';

describe('EnInformacjeComponent', () => {
  let component: EnInformacjeComponent;
  let fixture: ComponentFixture<EnInformacjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnInformacjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnInformacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

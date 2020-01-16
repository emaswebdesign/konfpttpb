import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnKontaktComponent } from './en-kontakt.component';

describe('EnKontaktComponent', () => {
  let component: EnKontaktComponent;
  let fixture: ComponentFixture<EnKontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnKontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

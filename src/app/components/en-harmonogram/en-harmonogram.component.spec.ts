import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHarmonogramComponent } from './en-harmonogram.component';

describe('EnHarmonogramComponent', () => {
  let component: EnHarmonogramComponent;
  let fixture: ComponentFixture<EnHarmonogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnHarmonogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnHarmonogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

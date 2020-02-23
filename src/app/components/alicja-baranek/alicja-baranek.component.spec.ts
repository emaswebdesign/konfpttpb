import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlicjaBaranekComponent } from './alicja-baranek.component';

describe('AlicjaBaranekComponent', () => {
  let component: AlicjaBaranekComponent;
  let fixture: ComponentFixture<AlicjaBaranekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlicjaBaranekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlicjaBaranekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

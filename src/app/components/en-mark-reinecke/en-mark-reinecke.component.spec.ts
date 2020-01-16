import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMarkReineckeComponent } from './en-mark-reinecke.component';

describe('EnMarkReineckeComponent', () => {
  let component: EnMarkReineckeComponent;
  let fixture: ComponentFixture<EnMarkReineckeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMarkReineckeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMarkReineckeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

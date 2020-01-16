import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkReineckeComponent } from './mark-reinecke.component';

describe('MarkReineckeComponent', () => {
  let component: MarkReineckeComponent;
  let fixture: ComponentFixture<MarkReineckeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkReineckeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkReineckeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielPankowskiComponent } from './daniel-pankowski.component';

describe('DanielPankowskiComponent', () => {
  let component: DanielPankowskiComponent;
  let fixture: ComponentFixture<DanielPankowskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanielPankowskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielPankowskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

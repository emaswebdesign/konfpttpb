import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagdalenaSkuzaComponent } from './magdalena-skuza.component';

describe('MagdalenaSkuzaComponent', () => {
  let component: MagdalenaSkuzaComponent;
  let fixture: ComponentFixture<MagdalenaSkuzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagdalenaSkuzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagdalenaSkuzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

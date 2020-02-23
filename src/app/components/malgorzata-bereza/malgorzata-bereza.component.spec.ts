import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalgorzataBerezaComponent } from './malgorzata-bereza.component';

describe('MalgorzataBerezaComponent', () => {
  let component: MalgorzataBerezaComponent;
  let fixture: ComponentFixture<MalgorzataBerezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalgorzataBerezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalgorzataBerezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

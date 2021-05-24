import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAndrzejKuczmierczykComponent } from './en-andrzej-kuczmierczyk.component';

describe('EnAndrzejKuczmierczykComponent', () => {
  let component: EnAndrzejKuczmierczykComponent;
  let fixture: ComponentFixture<EnAndrzejKuczmierczykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAndrzejKuczmierczykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAndrzejKuczmierczykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

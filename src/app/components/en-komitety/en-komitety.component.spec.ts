import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnKomitetyComponent } from './en-komitety.component';

describe('EnKomitetyComponent', () => {
  let component: EnKomitetyComponent;
  let fixture: ComponentFixture<EnKomitetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnKomitetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnKomitetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

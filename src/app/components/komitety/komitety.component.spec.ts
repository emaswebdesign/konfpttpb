import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomitetyComponent } from './komitety.component';

describe('KomitetyComponent', () => {
  let component: KomitetyComponent;
  let fixture: ComponentFixture<KomitetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomitetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomitetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

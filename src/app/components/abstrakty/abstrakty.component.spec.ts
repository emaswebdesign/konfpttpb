import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstraktyComponent } from './abstrakty.component';

describe('AbstraktyComponent', () => {
  let component: AbstraktyComponent;
  let fixture: ComponentFixture<AbstraktyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstraktyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstraktyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

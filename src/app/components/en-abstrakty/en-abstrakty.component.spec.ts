import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAbstraktyComponent } from './en-abstrakty.component';

describe('EnAbstraktyComponent', () => {
  let component: EnAbstraktyComponent;
  let fixture: ComponentFixture<EnAbstraktyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAbstraktyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAbstraktyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

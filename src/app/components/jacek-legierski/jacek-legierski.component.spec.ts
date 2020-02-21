import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacekLegierskiComponent } from './jacek-legierski.component';

describe('JacekLegierskiComponent', () => {
  let component: JacekLegierskiComponent;
  let fixture: ComponentFixture<JacekLegierskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacekLegierskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacekLegierskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

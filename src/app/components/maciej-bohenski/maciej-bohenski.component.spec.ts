import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaciejBohenskiComponent } from './maciej-bohenski.component';

describe('MaciejBohenskiComponent', () => {
  let component: MaciejBohenskiComponent;
  let fixture: ComponentFixture<MaciejBohenskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaciejBohenskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaciejBohenskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

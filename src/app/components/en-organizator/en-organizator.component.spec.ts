import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnOrganizatorComponent } from './en-organizator.component';

describe('EnOrganizatorComponent', () => {
  let component: EnOrganizatorComponent;
  let fixture: ComponentFixture<EnOrganizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnOrganizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnOrganizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelaSwalesComponent } from './michaela-swales.component';

describe('MichaelaSwalesComponent', () => {
  let component: MichaelaSwalesComponent;
  let fixture: ComponentFixture<MichaelaSwalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichaelaSwalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelaSwalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

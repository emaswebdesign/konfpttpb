import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoannaSalbertComponent } from './joanna-salbert.component';

describe('JoannaSalbertComponent', () => {
  let component: JoannaSalbertComponent;
  let fixture: ComponentFixture<JoannaSalbertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoannaSalbertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoannaSalbertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

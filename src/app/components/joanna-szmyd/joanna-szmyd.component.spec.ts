import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoannaSzmydComponent } from './joanna-szmyd.component';

describe('JoannaSzmydComponent', () => {
  let component: JoannaSzmydComponent;
  let fixture: ComponentFixture<JoannaSzmydComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoannaSzmydComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoannaSzmydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

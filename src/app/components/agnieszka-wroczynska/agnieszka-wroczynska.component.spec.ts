import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnieszkaWroczynskaComponent } from './agnieszka-wroczynska.component';

describe('AgnieszkaWroczynskaComponent', () => {
  let component: AgnieszkaWroczynskaComponent;
  let fixture: ComponentFixture<AgnieszkaWroczynskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgnieszkaWroczynskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgnieszkaWroczynskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

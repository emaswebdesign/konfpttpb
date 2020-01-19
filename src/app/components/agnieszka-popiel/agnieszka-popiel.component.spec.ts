import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnieszkaPopielComponent } from './agnieszka-popiel.component';

describe('AgnieszkaPopielComponent', () => {
  let component: AgnieszkaPopielComponent;
  let fixture: ComponentFixture<AgnieszkaPopielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgnieszkaPopielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgnieszkaPopielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

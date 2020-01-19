import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAgnieszkaPopielComponent } from './en-agnieszka-popiel.component';

describe('EnAgnieszkaPopielComponent', () => {
  let component: EnAgnieszkaPopielComponent;
  let fixture: ComponentFixture<EnAgnieszkaPopielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAgnieszkaPopielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAgnieszkaPopielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

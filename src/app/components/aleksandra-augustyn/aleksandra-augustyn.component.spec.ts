import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleksandraAugustynComponent } from './aleksandra-augustyn.component';

describe('AleksandraAugustynComponent', () => {
  let component: AleksandraAugustynComponent;
  let fixture: ComponentFixture<AleksandraAugustynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleksandraAugustynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleksandraAugustynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

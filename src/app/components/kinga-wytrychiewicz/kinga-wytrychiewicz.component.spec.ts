import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingaWytrychiewiczComponent } from './kinga-wytrychiewicz.component';

describe('KingaWytrychiewiczComponent', () => {
  let component: KingaWytrychiewiczComponent;
  let fixture: ComponentFixture<KingaWytrychiewiczComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingaWytrychiewiczComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingaWytrychiewiczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

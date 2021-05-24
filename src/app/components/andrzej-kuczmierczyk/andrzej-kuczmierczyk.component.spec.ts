import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrzejKuczmierczykComponent } from './andrzej-kuczmierczyk.component';

describe('AndrzejKuczmierczykComponent', () => {
  let component: AndrzejKuczmierczykComponent;
  let fixture: ComponentFixture<AndrzejKuczmierczykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndrzejKuczmierczykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndrzejKuczmierczykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

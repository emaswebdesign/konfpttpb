import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCennikTabelaComponent } from './en-cennik-tabela.component';

describe('EnCennikTabelaComponent', () => {
  let component: EnCennikTabelaComponent;
  let fixture: ComponentFixture<EnCennikTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCennikTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCennikTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

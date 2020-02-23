import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CennikTabelaComponent } from './cennik-tabela.component';

describe('CennikTabelaComponent', () => {
  let component: CennikTabelaComponent;
  let fixture: ComponentFixture<CennikTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CennikTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CennikTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

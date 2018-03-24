import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPesquisaComponent } from './dados-pesquisa.component';

describe('DadosPesquisaComponent', () => {
  let component: DadosPesquisaComponent;
  let fixture: ComponentFixture<DadosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

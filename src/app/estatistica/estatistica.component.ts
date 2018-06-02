import { Component, OnInit } from '@angular/core';
import { IPesquisa } from '../model/pesquisa.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { StatisticsService } from '../providers/statistics.service';

import { Profissao } from '../model/profissao.model';
import { Formacao } from '../model/formacao.model';
import { Idade } from './../model/idade.model';
import { Sexo } from './../model/sexo.model';
import { Estatistica } from '../model/estatistica.model';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {
  public pesquisaCollection: AngularFirestoreCollection<IPesquisa>;
  public pesquisa: Observable<IPesquisa[]>;

  // dados separados
  public geral: Estatistica;
  public sexo: Sexo;
  public idade: Idade;
  public profissao: Profissao;
  public formacao: Formacao;

  constructor(public afs: AngularFirestore, public est: StatisticsService) {
    this.geral = new Estatistica();
    this.sexo = new Sexo();
    this.idade = new Idade();
    this.profissao = new Profissao();
    this.formacao = new Formacao();
  }

  ngOnInit() {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();

    this.pesquisa.forEach(element => {
      this.getData(element, this.geral);
      this.updSexo(element);
      this.updIdade(element);
      this.updProfissao(element);
      this.updFormacao(element);
    });
  }

  /**
   * Devolve um array soh com os scores
   * @param arr Array que sera retirado os scores
   */
  getScore(arr: Array<any>): Promise<any> {
    return new Promise(resolve => {
      const newArr = [];
      arr.forEach(el => {
        newArr.push(el._15_score);
      });
      resolve(newArr.sort((a, b) => a - b));
    });
  }

  getData(arr: Array<any>, obj: any) {
    // recupera e ordena soh os scores
    this.getScore(arr).then(resp => {
      obj.total = resp.length;
      // pega a media geral
      this.est.media(resp).then(med => {
        obj.media = med.toFixed(2);
        // calcula a variancia e o desvio padrao
        this.est.variancia(resp, med).then(a => {
          obj.variancia = a;
          obj.desvioPadrao = this.est.desvioPadrao(a).toFixed(4);
        });
      });
      obj.mediana = this.est.mediana(resp);
    });
  }

  /**
   * Organiza as estatisticas baseadas no sexo
   * @param arr array que sera filtrado
   */
  async updSexo(arr: Array<any>) {
    const h = [],
          m = [];
    await arr.forEach(res => {
      if (res._03_sexo === 'M') {
        h.push(res);
      } else {
        m.push(res);
      }
    });
    this.getData(h, this.sexo.homem);
    this.getData(m, this.sexo.mulher);
  }

  /**
   * Organiza as estatisticas baseadas na idade
   * @param arr array que sera filtrado
   */
  async updIdade(arr: Array<any>) {
    const a = [],
          b = [],
          c = [],
          d = [],
          e = [];
    await arr.forEach(res => {
      if (res._02_idade === 'Até 20 anos') {
        a.push(res);
      } else if (res._02_idade === 'De 21 a 35 anos') {
        b.push(res);
      } else if (res._02_idade === 'De 36 a 50 anos') {
        c.push(res);
      } else if (res._02_idade === 'De 51 a 65 anos') {
        d.push(res);
      } else {
        e.push(res);
      }
    });
    this.getData(a, this.idade.a);
    this.getData(b, this.idade.b);
    this.getData(c, this.idade.c);
    this.getData(d, this.idade.d);
    this.getData(e, this.idade.e);
  }

  /**
   * Organiza as estatisticas baseadas na profissao
   * @param arr array que sera filtrado
   */
  async updProfissao(arr: Array<any>) {
    const a = [],
          e = [],
          p = [],
          t = [],
          v = [];
    await arr.forEach(res => {
      if (res._06_profissao === 'Auxiliar de Limpeza') {
        a.push(res);
      } else if (res._06_profissao === 'Estagiário(a)') {
        e.push(res);
      } else if (res._06_profissao === 'Professor(a)') {
        p.push(res);
      } else if (res._06_profissao === 'Técnico-Administrativo') {
        t.push(res);
      } else {
        v.push(res);
      }
    });
    this.getData(a, this.profissao.aux);
    this.getData(e, this.profissao.estag);
    this.getData(p, this.profissao.prof);
    this.getData(t, this.profissao.tecn);
    this.getData(v, this.profissao.vigi);
  }

  /**
   * Organiza as estatisticas baseadas na formacao educacional
   * @param arr array que sera filtrado
   */
  async updFormacao(arr: Array<any>) {
    const fi = [],
          fc = [],
          mi = [],
          mc = [],
          si = [],
          sc = [],
          lsi = [],
          lsc = [],
          ssmi = [],
          ssmc = [],
          ssdi = [],
          ssdc = [];
    await arr.forEach(res => {
      if (res._05_escolaridade === 'Fundamental Incompleto') {
        fi.push(res);
      } else if (res._05_escolaridade === 'Fundamental Completo') {
        fc.push(res);
      } else if (res._05_escolaridade === 'Medio Incompleto') {
        mi.push(res);
      } else if (res._05_escolaridade === 'Medio Completo') {
        mc.push(res);
      } else if (res._05_escolaridade === 'Superior Incompleto') {
        si.push(res);
      } else if (res._05_escolaridade === 'Superior Completo') {
        sc.push(res);
      } else if (res._05_escolaridade === 'Pos-graduacao Lato Sensu Incompleto') {
        lsi.push(res);
      } else if (res._05_escolaridade === 'Pos-graduacao Lato Sensu Completo') {
        lsc.push(res);
      } else if (res._05_escolaridade === 'Pos-graduacao Stricto Sensu Mestrado Incompleto') {
        ssmi.push(res);
      } else if (res._05_escolaridade === 'Pos-graduacao Stricto Sensu Mestrado Completo') {
        ssmc.push(res);
      } else if (res._05_escolaridade === 'Pos-graduacao Stricto Sensu Doutor Incompleto') {
        ssdi.push(res);
      } else {
        ssdc.push(res);
      }
    });
    this.getData(fi, this.formacao.fi);
    this.getData(fc, this.formacao.fc);
    this.getData(mi, this.formacao.mi);
    this.getData(mc, this.formacao.mc);
    this.getData(si, this.formacao.si);
    this.getData(sc, this.formacao.sc);
    this.getData(lsi, this.formacao.lsi);
    this.getData(lsc, this.formacao.lsc);
    this.getData(ssmi, this.formacao.ssmi);
    this.getData(ssmc, this.formacao.ssmc);
    this.getData(ssdi, this.formacao.ssdi);
    this.getData(ssdc, this.formacao.ssdc);
  }
}

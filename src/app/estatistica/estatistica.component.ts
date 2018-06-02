import { Component, OnInit } from '@angular/core';
import { IPesquisa } from '../model/pesquisa.interface';
import { Estatistica } from '../model/estatistica.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { StatisticsService } from '../providers/statistics.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {
  public pesquisaCollection: AngularFirestoreCollection<IPesquisa>;
  public pesquisa: Observable<IPesquisa[]>;

  // dados separados
  public geral: Estatistica = new Estatistica();

  public homens: Estatistica = new Estatistica();
  public mulheres: Estatistica = new Estatistica();

  constructor(public afs: AngularFirestore, public est: StatisticsService) {}

  ngOnInit() {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();

    this.pesquisa.forEach(element => {
      // recupera e ordena soh os scores
      this.getScore(element).then(resp => {
        this.geral.total = resp.length;
        // pega a media geral
        this.est.media(resp).then(med => {
          this.geral.media = med.toFixed(2);
          // calcula a variancia e o desvio padrao
          this.est.variancia(resp, med).then(a => {
            this.geral.variancia = a;
            this.geral.desvioPadrao = this.est.desvioPadrao(a).toFixed(4);
          });
        });
        this.geral.mediana = this.est.mediana(resp);
        // console.log(resp);
      });
    });
  }

  // Devolve um array soh com os scores
  getScore(arr: Array<any>): Promise<any> {
    return new Promise(resolve => {
      const newArr = [];
      arr.forEach(el => {
        newArr.push(el._15_score);
      });
      resolve(newArr.sort((a, b) => a - b));
    });
  }
}

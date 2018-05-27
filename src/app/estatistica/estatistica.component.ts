import { Component, OnInit } from '@angular/core';
import { Pesquisa } from '../model/pesquisa.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { StatisticsService } from '../providers/statistics.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {

  public pesquisaCollection: AngularFirestoreCollection<Pesquisa>;
  public pesquisa: Observable<Pesquisa[]>;
  public mediaGeral: number;
  public medianaGeral: number;
  public total: number;
  public teste = [54, 34, 1, 24, 3, 89, 5, 7, 34, 1];

  constructor(public afs: AngularFirestore, public est: StatisticsService) { }

  ngOnInit() {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();
    this.pesquisa.forEach(element => {
      this.getScore(element).then(resp => {
        this.total = resp.length;
        this.mediaGeral = this.est.media(resp);
        this.medianaGeral = this.est.mediana(resp);
        console.log(resp);
      });
    });
  }

  // Devolve um array soh com os scores
  getScore(arr: Array<any>): Promise<any> {
    return new Promise((resolve) => {
      const newArr = [];
      arr.forEach(el => {
        newArr.push(el._15_score);
      });
      resolve(newArr.sort((a, b) => a - b));
    });
  }

}

import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dados-pesquisa',
  templateUrl: './dados-pesquisa.component.html',
  styleUrls: ['./dados-pesquisa.component.css']
})
export class DadosPesquisaComponent implements OnInit {

  private pesquisaCollection: AngularFirestoreCollection<any>;
  private pesquisa: Observable<any>;
  private homens;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();
    // this.pesquisa.forEach(el => {
    //   this.homens = el.length;
    // });
  }

}

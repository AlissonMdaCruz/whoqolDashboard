import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dados-pesquisa',
  templateUrl: './dados-pesquisa.component.html',
  styleUrls: ['./dados-pesquisa.component.css']
})
export class DadosPesquisaComponent{

  private pesquisaCollection: AngularFirestoreCollection<any>;
  private pesquisa;

  constructor(private afs: AngularFirestore) {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();
  }

}

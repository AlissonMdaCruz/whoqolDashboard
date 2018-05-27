import { Component, OnInit } from '@angular/core';

import { Pesquisa } from '../model/pesquisa.interface';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dados-pesquisa',
  templateUrl: './dados-pesquisa.component.html',
  styleUrls: ['./dados-pesquisa.component.css']
})
export class DadosPesquisaComponent implements OnInit {

  public pesquisaCollection: AngularFirestoreCollection<Pesquisa>;
  public pesquisa: Observable<Pesquisa[]>;
  public tabela;
  public options = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: ',',
    showLabels: true,
    headers: ['Nome', 'Idade', 'Sexo', 'Estado Civil', 'Escolaridade', 'Profissao', 'Email', 'Respostas',
    'Ajuda', 'Tempo', 'Dom Fisico', 'Dom Psicologico', 'Dom Rel Sociais', 'Dom Meio Ambiente', 'Score']
  };

  constructor(public afs: AngularFirestore) { }

  ngOnInit() {
    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();
    this.pesquisa.subscribe(data => {
      this.tabela = data;
      console.log(this.tabela);
    });
  }

  toCSV() {
    console.log('Exportando');
    // tslint:disable-next-line:no-unused-expression
    new Angular5Csv(this.tabela, 'WhoqolAppDados', this.options);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DadosPesquisaComponent } from './dados-pesquisa/dados-pesquisa.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { rounting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    DadosPesquisaComponent,
    EstatisticaComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    rounting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DadosPesquisaComponent } from './dados-pesquisa/dados-pesquisa.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';


const APP_ROUTES: Routes = [
  { path: '', component: DadosPesquisaComponent},
  { path: 'estatistica', component: EstatisticaComponent}
]

export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

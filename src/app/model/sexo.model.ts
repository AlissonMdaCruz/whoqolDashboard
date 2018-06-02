import { Estatistica } from './estatistica.model';


export class Sexo {
  homem: Estatistica;
  mulher: Estatistica;

  constructor() {
    this.homem = new Estatistica();
    this.mulher = new Estatistica();
  }

}

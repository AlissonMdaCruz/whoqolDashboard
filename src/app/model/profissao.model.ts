import { Estatistica } from './estatistica.model';

export class Profissao {

  aux: Estatistica;
  estag: Estatistica;
  prof: Estatistica;
  tecn: Estatistica;
  vigi: Estatistica;

  constructor() {
    this.aux = new Estatistica();
    this.estag = new Estatistica();
    this.prof = new Estatistica();
    this.tecn = new Estatistica();
    this.vigi = new Estatistica();
  }

}

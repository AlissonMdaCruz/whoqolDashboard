import { Estatistica } from './estatistica.model';

export class Formacao {

  fi: Estatistica;
  fc: Estatistica;
  mi: Estatistica;
  mc: Estatistica;
  si: Estatistica;
  sc: Estatistica;
  lsi: Estatistica;
  lsc: Estatistica;
  ssmi: Estatistica;
  ssmc: Estatistica;
  ssdi: Estatistica;
  ssdc: Estatistica;

  constructor() {
    this.fi = new Estatistica();
    this.fc = new Estatistica();
    this.mi = new Estatistica();
    this.mc = new Estatistica();
    this.si = new Estatistica();
    this.sc = new Estatistica();
    this.lsi = new Estatistica();
    this.lsc = new Estatistica();
    this.ssmi = new Estatistica();
    this.ssmc = new Estatistica();
    this.ssdi = new Estatistica();
    this.ssdc = new Estatistica();
  }

}

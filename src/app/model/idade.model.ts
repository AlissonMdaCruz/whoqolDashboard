import { Estatistica } from './estatistica.model';


export class Idade {
  a: Estatistica;
  b: Estatistica;
  c: Estatistica;
  d: Estatistica;
  e: Estatistica;

  constructor() {
    this.a = new Estatistica();
    this.b = new Estatistica();
    this.c = new Estatistica();
    this.d = new Estatistica();
    this.e = new Estatistica();
  }

}

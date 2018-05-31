import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {
  constructor() {}

  media(arr: Array<any>): Promise<any> {
    return new Promise(resolve => {
      let aux = 0;
      const tam = arr.length;
      arr.forEach(el => {
        aux += el;
      });
      resolve(aux / tam);
    });
  }

  mediana(arr: Array<any>) {
    const i = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[i] + arr[i - 1]) / 2;
    } else {
      return arr[i];
    }
  }

  /**
   * O desvio padrão indica o quanto um conjunto de dados é uniforme.
   * Quanto mais próximo de 0 for o desvio padrão, mais homogêneo são os dados.
   * É a raiz quadrada da variância.
   */
  desvioPadrao(desvio: number) {
    return Math.sqrt(desvio);
  }

  /**
   * O desvio padrão indica o quanto um conjunto de dados é uniforme.
   * Quanto mais próximo de 0 for o desvio padrão, mais homogêneo são os dados.
   */
  async variancia(arr: Array<any>, med: number) {
    let aux = 0,
      result;
    await arr.forEach(el => {
      aux += Math.pow(el - med, 2);
    });
    result = Math.sqrt(aux / arr.length);
    return result.toFixed(4);
  }
}

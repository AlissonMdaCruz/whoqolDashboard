import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor() { }

  media(arr: Array<any>) {
    let aux = 0;
    const tam = arr.length;
    arr.forEach(el => {
      aux += el;
    });
    return aux / tam;
  }

  mediana(arr: Array<any>) {
    const i = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0 ) {
      return (arr[i] + arr[i - 1]) / 2;
    }else {
      return arr[i];
    }
  }
}

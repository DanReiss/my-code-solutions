/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/series
  Data: 08/2023
*/


export class Series {
  constructor(series) {
    this.series = series.split("").map(numStr => Number(numStr));
  }

  slices(sliceLength) {
    if(!this.series.length) throw Error("series cannot be empty");
    if(sliceLength > this.series.length) throw Error("slice length cannot be greater than series length");
    if(sliceLength === 0) throw Error("slice length cannot be zero");
    if(sliceLength < 0) throw  Error("slice length cannot be negative");
    
    let combinations = [];
    for(let i in this.series){
      const combination = this.series.slice(i, sliceLength + Number(i));
      if(combination.length === sliceLength) combinations.push(combination);
    }
    return combinations;
  }
}
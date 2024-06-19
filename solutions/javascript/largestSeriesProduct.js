/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/largest-series-product
  Data: 02/2024
*/

export const largestProduct = (signal, span) => {
  let max = 0;
  
  if(signal.length < span) throw Error("Span must be smaller than string length");
  if(span <= 0) throw Error("Span must be greater than zero");
  if(isNaN(Number(signal))) throw Error("Digits input must only contain digits");

  for(let i = 0; i < signal.length; i++){
    const sliceDigits = signal.slice(i, span + i).split("");
    const product = sliceDigits.reduce((acc, curr) => acc * curr, 1);
    if(sliceDigits.length == span && product > max){
      max = product;
    }
  }

  return max;
};
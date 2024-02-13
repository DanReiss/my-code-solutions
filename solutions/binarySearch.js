/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/binary-search
  Data: 12/2023
*/

export const find = (ordenedList, element) => {
  let lowest = 0;
  let highest = ordenedList.length - 1;

  do{
    const mid = Math.floor((lowest + highest) / 2);
    const pivot = ordenedList[mid];

    if(pivot == element){
      return mid;
    }
    if(highest - lowest <= 1){
      throw Error("Value not in array");
    }

    pivot > element ? highest = mid - 1 : lowest = mid + 1;
  }  while(lowest <= highest);
};
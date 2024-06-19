/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/perfect-numbers  
  Data: 02/2024
*/

export const classify = (number) => {
  let testNum = 1;
  let factorsSum = 0;
  
  if(number <= 0){
    throw Error('Classification is only possible for natural numbers.')
  }
  while(testNum < number){
    if(number % testNum == 0){
      factorsSum += testNum;
    }
    testNum++;
  }
  if(factorsSum > number){
    return "abundant"
  } else if (factorsSum < number){
    return "deficient"
  }else{
    return "perfect"
  }
};
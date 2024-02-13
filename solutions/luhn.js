
/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/luhn
  Data: 01/2024
*/

export const valid = (string) => {
  let digits = string.split(" ").join("").split("");
  if(digits.length <= 1) return false;
  let isSecondDigit = false;

  for(let x = digits.length - 1; x >= 0; x--){
    if(isSecondDigit){
      const doubled = digits[x] * 2;
      digits[x] = doubled > 9 ? doubled - 9 : doubled;
    }
    isSecondDigit = !isSecondDigit;
  }

  const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);

  return sum % 10 === 0;
};
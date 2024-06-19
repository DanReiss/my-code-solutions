/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/isogram
  Data: 06/2023
*/

export const isIsogram = (word) => {
  const splitted = word.toLowerCase().split("").filter((letter)=> letter !== ' ' && letter !== '-')
  return new Set(splitted).size == splitted.length
};

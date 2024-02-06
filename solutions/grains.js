/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/grains
  Data: feito a 5 meses atrás
*/

export const square = (sq) => {
  if(sq <= 0 || sq > 64) throw new Error('square must be between 1 and 64')
  return 2n ** BigInt(sq - 1)
}
export const total = () => (18446744073709551615n)


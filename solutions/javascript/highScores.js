/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/high-scores  
  Data: 02/2024
*/

export class HighScores {
  constructor(scores) {
    this.allScores = scores;
  }
  get scores() {
    return this.allScores;
  }
  get latest() {
    return this.allScores[this.scores.length - 1];
  }
  get personalBest() {
    return this.allScores.sort((a, b) => b - a)[0];
  }
  get personalTopThree() {
    return this.allScores.sort((a, b) => b - a ).slice(0, 3);
  }
}
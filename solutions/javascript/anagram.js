/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/anagram
  Data: 2023
*/

export const findAnagrams = (target, candidates) => {
  target = target.toLowerCase();
  return candidates.filter((candidate) => isAnagram(candidate.toLowerCase().split("")));
  function isAnagram(letters) {
    let test = target.split("");
    
    if(JSON.stringify(letters) == JSON.stringify(test)) return false;
    
    letters.forEach((_, i)=>{
      const firstLetter = test.shift();
      const index = letters.indexOf(firstLetter);
      if(index < 0) return false;
      letters[index] = letters[i];
      letters[i] = firstLetter;
    })
    return letters.join("") === target
  }
}
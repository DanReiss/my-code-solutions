/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/matching-brackets  
  Data: 09/2023
*/

export const isPaired = (str) => {
  const stack = [];
  
  if(!str) return true;
  const bracketsMatch = (bkt1, bkt2) =>{
    if("(){}[]".includes(bkt1 + bkt2)) return true;
    return false;
  }
   
  for(let char of str.split("")){
    if(char.match(/[({\[]/)){
      stack.push(char);
    }
    if(char.match(/[)}\]]/)){
      if(!stack.length) return false;
      
      if(!bracketsMatch(stack.pop(), char)) return false;
    }
  }
  return !stack.length;
};
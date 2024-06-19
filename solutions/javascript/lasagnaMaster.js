/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/lasagna-master
  Data: feito a mais de um ano atrás
*/

export function cookingStatus(restTime){
  if(restTime === undefined) return "You forgot to set the timer."
  return restTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.'
}  

export function preparationTime(layers, time = 2){
  return layers.length * time
}

export function quantities(layers){
  let [noodles, sauce] = [0, 0];
  layers.forEach((item) => {
    if(item === 'noodles') noodles += 50
    if(item === 'sauce')  sauce += 0.2
  })  
  return {noodles, sauce}
}

export function addSecretIngredient(friendList, myList){
  myList.push(friendList[friendList.length - 1])
}

export function scaleRecipe(ingredients, NumPortions = 1){
  let newObj = {}
  for (let element in ingredients) {
    newObj[element] = ingredients[element] * NumPortions / 2
  }
  return newObj
}
/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/pizza-order
  Data: 2023
*/

export function pizzaPrice(pizza, ...extras) {
  const pizzas = {
    margherita: 7,
    caprese: 9,
    formaggio: 10
  }
  
  const reduceExtras = ([extra, ...rest])=> {
    const options = {extrasauce: 1, extratoppings: 2}
    if(!extra) return 0
    if(rest.length === 0) return options[extra.toLowerCase()]
    return options[extra.toLowerCase()] + reduceExtras(rest)
  }
  
  return pizzas[pizza.toLowerCase()] + reduceExtras(extras)
}

export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((sum, current)=> {
     return sum + pizzaPrice(current.pizza, ...current.extras)
  }, 0)
}
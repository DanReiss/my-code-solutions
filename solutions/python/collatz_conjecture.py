'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/collatz-conjecture
  Data: 06/2024
'''

def steps(number):
    steps = 0
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    
    while number != 1.0:
        steps += 1     
        if not number % 2: number =  number / 2
        else: number = (number * 3) + 1
    return steps
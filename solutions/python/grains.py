'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/grains
  Data: 06/2024
'''

def square(number):
    if number > 64 or number < 1:
        raise ValueError("square must be between 1 and 64")
    return 2 ** (number - 1)
    
def total():
    return (2 ** 64) - 1
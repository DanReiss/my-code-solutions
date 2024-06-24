'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/raindrops
  Data: 06/2024
'''

def convert(number):
    result = ""
    
    if not number % 3: result += "Pling"
    if not number % 5: result += "Plang"
    if not number % 7: result += "Plong"
    return result or str(number)
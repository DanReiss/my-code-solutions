'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/darts
  Data: 06/2024
'''

def score(x, y):
    position = (x ** 2 + y ** 2) ** 0.5

    if position <= 1: return 10
    elif 1 < position <= 5: return 5
    elif 5 < position <= 10: return 1
    else: return 0
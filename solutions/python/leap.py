'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/leap
  Data: 06/2024
'''

def leap_year(year):
    if year % 100 == 0:
        return year % 400 == 0
    return year % 4 == 0
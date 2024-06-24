'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/armstrong-numbers
  Data: 06/2024
'''

def is_armstrong_number(number):
    sum = 0;
    for num_str in str(number):
        sum += int(num_str) ** len(str(number))
    return number == sum

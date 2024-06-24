'''
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/python/exercises/triangle
  Data: 06/2024
'''

def is_triangle(sides):
    a, b, c = sides
    if min(sides) > 0:
        if (a + b >= c) and (b + c >= a) and (a + c >= b):
            return True
    return False

def equilateral(sides):
    a, b, c = sides
    return is_triangle(sides) and a == b == c

def isosceles(sides):
    a, b, c = sides
    return is_triangle(sides) and len({a, b, c}) <= 2

def scalene(sides):
    a, b, c = sides
    return is_triangle(sides) and len({a, b, c}) == 3
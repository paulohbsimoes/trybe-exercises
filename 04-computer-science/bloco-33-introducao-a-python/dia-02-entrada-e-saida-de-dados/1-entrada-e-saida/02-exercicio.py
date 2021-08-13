import sys
from functools import reduce


def sum_numbers(numbers):
    return reduce(lambda total, cur: total + int(cur), numbers, 0)


def read_numbers(how_many_numbers):
    numbers = []

    for count in range(how_many_numbers):
        number = input(f"Digite o {count + 1} número: ")

        if not number.isdigit():
            print(
                f"Erro ao somar valores, {number} é um valor inválido",
                file=sys.stderr,
            )
        else:
            numbers.append(number)

    return numbers


if __name__ == "__main__":
    try:
        result = None

        if len(sys.argv[1:]) > 0:
            numbers = map(lambda number: int(number), sys.argv[1:])
            result = sum_numbers(numbers)
        else:
            HOW_MANY_NUMBERS = int(
                input("Quantos números gostaria de somar? ")
            )
            numbers = read_numbers(HOW_MANY_NUMBERS)
            result = sum_numbers(numbers)

        print(f"O resultado da soma é: {result}")

    except ValueError:
        print("O número digitado é inválido")

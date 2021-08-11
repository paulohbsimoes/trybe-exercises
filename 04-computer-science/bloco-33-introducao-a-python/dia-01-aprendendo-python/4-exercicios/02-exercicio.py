from functools import reduce


def average(*numbers):
    return reduce(lambda a, b: a + b, numbers) / len(numbers)


if __name__ == "__main__":
    print(average(1, 2, 3, 4, 5))

def classify(number):
    result = ""
    if number % 3 == 0:
        result += "Fizz"
    if number % 5 == 0:
        result += "Buzz"
    return result if len(result) > 0 else number


def get_numbers(nth):
    return [classify(number) for number in range(1, nth + 1)]

from exercicio_01 import get_numbers, classify


def test_if_given_a_multiple_of_three_it_returns_fizz():
    assert classify(3) == "Fizz"


def test_if_given_a_multiple_of_five_it_returns_buzz():
    assert classify(5) == "Buzz"


def test_if_given_a_multiple_of_three_and_five_it_returns_fizzbuzz():
    assert classify(15) == "FizzBuzz"


def test_if_given_arg_3_return_a_list_with_correct_values():
    assert get_numbers(3) == [1, 2, "Fizz"]


def test_if_given_arg_10_return_a_list_with_correct_values():
    assert get_numbers(10) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
    ]

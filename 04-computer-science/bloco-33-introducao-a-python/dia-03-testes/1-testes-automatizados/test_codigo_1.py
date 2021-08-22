from codigo_1 import is_odd


def test_is_odd_when_number_is_odd_returns_true():
    "Para um número ímpar a função deve retornar o valor True"
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    "Para um número par a função deve retornar o valor True"
    assert is_odd(2) is False

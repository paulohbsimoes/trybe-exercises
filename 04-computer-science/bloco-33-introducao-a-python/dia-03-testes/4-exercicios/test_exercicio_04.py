from exercicio_04 import get_valid_emails


def test_if_given_an_empty_list_returns_an_empty_list():
    assert get_valid_emails([]) == []


def test_if_given_a_list_of_emails_returns_only_the_valid_ones():
    emails = [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com",
    ]

    actual = get_valid_emails(emails)

    expected = [
        "nome@dominio.com",
        "outro@dominio.com",
    ]

    assert actual == expected

import pytest

from exercicio_03 import (
    is_username_valid,
    is_website_valid,
    is_extension_valid,
    is_email_valid,
)


def test_if_given_a_invalid_username_returns_false():
    assert is_username_valid("1notstartswithaletter") is False


def test_if_given_a_valid_username_returns_true():
    assert is_username_valid("this1sav4lidus3rname")


def test_if_given_a_invalid_website_returns_false():
    assert is_website_valid("invalid@website") is False


def test_if_given_a_valid_website_returns_true():
    assert is_website_valid("validwebsite")


def test_if_given_a_invalid_extension_returns_false():
    assert is_extension_valid("invalidextension") is False


def test_if_given_a_valid_extension_returns_true():
    assert is_extension_valid("com")


def test_if_given_email_with_a_invalid_username_raises():
    with pytest.raises(
        ValueError, match="Username should have only letters, digits, - and _"
    ):
        is_email_valid("1invalidusername@dominio.com")


def test_if_given_email_with_a_invalid_website_raises():
    with pytest.raises(
        ValueError, match="Website should have only letters and digits"
    ):
        is_email_valid("errado@invalid@domain.com")


def test_if_given_email_with_a_invalid_extension_raises():
    with pytest.raises(
        ValueError,
        match="Extension should have only letters and digits "
        + "and have length < 4",
    ):
        is_email_valid("errado@dominio.invalidextension")


def test_if_given_a_valid_email_returns_true():
    assert is_email_valid("nome@dominio.com")

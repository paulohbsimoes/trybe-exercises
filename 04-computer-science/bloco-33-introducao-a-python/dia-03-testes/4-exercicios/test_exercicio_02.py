import pytest
from exercicio_02 import decode, decode_letter


def test_if_given_an_invalid_letter_raises():
    with pytest.raises(ValueError, match="Invalid letter"):
        decode_letter("Ç")


def test_if_given_letter_A_B_or_C_decode_letter_return_2():
    assert decode_letter("A") == "2"
    assert decode_letter("B") == "2"
    assert decode_letter("C") == "2"


def test_if_given_letter_D_E_or_F_decode_letter_return_3():
    assert decode_letter("D") == "3"
    assert decode_letter("E") == "3"
    assert decode_letter("F") == "3"


def test_if_given_letter_G_H_or_I_decode_letter_return_4():
    assert decode_letter("G") == "4"
    assert decode_letter("H") == "4"
    assert decode_letter("I") == "4"


def test_if_given_letter_J_K_or_L_decode_letter_return_5():
    assert decode_letter("J") == "5"
    assert decode_letter("K") == "5"
    assert decode_letter("L") == "5"


def test_if_given_letter_M_N_or_O_decode_letter_return_6():
    assert decode_letter("M") == "6"
    assert decode_letter("N") == "6"
    assert decode_letter("O") == "6"


def test_if_given_letter_P_Q_R_or_S_decode_letter_return_7():
    assert decode_letter("P") == "7"
    assert decode_letter("Q") == "7"
    assert decode_letter("R") == "7"
    assert decode_letter("S") == "7"


def test_if_given_letter_T_U_or_V_decode_letter_return_8():
    assert decode_letter("T") == "8"
    assert decode_letter("U") == "8"
    assert decode_letter("V") == "8"


def test_if_given_letter_W_X_Y_or_Z_decode_letter_return_9():
    assert decode_letter("W") == "9"
    assert decode_letter("X") == "9"
    assert decode_letter("Y") == "9"
    assert decode_letter("Z") == "9"


def test_if_given_a_empty_string_raise_a_exception():
    with pytest.raises(ValueError, match="Invalid length"):
        decode("")


def test_if_decode_return_the_correct_number_given_the_encoded_string():
    assert decode("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
    assert decode("MY-MISERABLE-JOB") == "69-647372253-562"
    assert decode("MY LOVE") == "69 5683"


def test_if_given_a_lowercase_string_it_decodes_properly():
    assert decode("my-miserable-job") == "69-647372253-562"

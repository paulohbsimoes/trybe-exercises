dict_decode = dict(
    zip(("ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"), "23456789")
)


def decode_letter(letter):
    for translation in dict_decode:
        if letter.upper() in translation:
            return dict_decode[translation]
    if letter not in "01- ":
        raise ValueError("Invalid letter")
    return letter


def decode(encoded_number):
    if not 1 < len(encoded_number) <= 30:
        raise ValueError("Invalid length")
    return "".join([decode_letter(letter) for letter in encoded_number])

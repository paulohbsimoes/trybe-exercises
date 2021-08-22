# import regex


def is_username_valid(username):
    if len(username) == 0 or not username[0].isalpha():
        return False
    for letter in username:
        if not (letter.isalpha() or letter.isdigit() or letter in "-_"):
            return False
    return True


def is_website_valid(website):
    for letter in website:
        if not (letter.isalpha() or letter.isdigit()):
            return False
    return True


def is_extension_valid(extension):
    if len(extension) > 3:
        return False
    for letter in extension:
        if not (letter.isalpha() or letter.isdigit()):
            return False
    return True


def is_email_valid(email):
    # Solução inicial, não funciona em casos onde @ ou . são repetidos
    # username, website_and_extension = email.split("@")
    # website, extension = website_and_extension.split(".")

    index = 0

    username = ""
    while email[index] != "@" or index > len(email) - 1:
        username += email[index]
        index += 1

    index += 1  # skip "@"

    website = ""
    while email[index] != "." or index > len(email) - 1:
        website += email[index]
        index += 1

    index += 1  # skip "."

    extension = email[index:]

    if not is_username_valid(username):
        raise ValueError("Username should have only letters, digits, - and _")

    if not is_website_valid(website):
        raise ValueError("Website should have only letters and digits")

    if not is_extension_valid(extension):
        raise ValueError(
            "Extension should have only letters and digits and have length < 4"
        )

    return True


# def is_email_valid(email):
#     pattern = r"^\w+[\w\d_]*@[\w\d]+\.[\w]{,3}"
#     return bool(regex.match(pattern, email))


if __name__ == "__main__":
    for email in [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com",
    ]:
        print(is_email_valid(email))

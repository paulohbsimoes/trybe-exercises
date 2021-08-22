from exercicio_03 import is_email_valid


def get_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            is_valid = is_email_valid(email)
            if is_valid:
                valid_emails.append(email)
        except ValueError:
            print(ValueError)
    return valid_emails


if __name__ == "__main__":
    emails = [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com",
    ]
    print(get_valid_emails(emails))

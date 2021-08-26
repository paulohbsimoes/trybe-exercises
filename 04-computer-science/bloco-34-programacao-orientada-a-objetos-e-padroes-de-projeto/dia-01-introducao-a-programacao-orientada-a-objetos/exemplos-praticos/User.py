class User:
    def __init__(self, name, email, password):
        """Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de reset de senha")


if __name__ == "__main__":
    meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
    print(meu_user)
    print(meu_user.name)
    print(meu_user.email)
    print(meu_user.password)

    meu_user.reset_password()

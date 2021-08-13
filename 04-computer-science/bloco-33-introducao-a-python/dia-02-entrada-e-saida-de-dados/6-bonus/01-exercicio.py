import json
from random import choice

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    pokemons_names = [pokemon["name"] for pokemon in pokemons]
    choosen_pokemon = choice(pokemons_names)

    attempts = 0

    wins = False

    while attempts < len(choosen_pokemon):
        hint = "".join(
            [
                letter if index < attempts else "_"
                for index, letter in list(enumerate(choosen_pokemon))
            ]
        )

        print("Hint: ", hint)

        guess = input("What is the pokémon? ")

        attempts += 1

        if guess == choosen_pokemon:
            wins = True
            print("Your guess is correct! Congratulations!")
            break

    if not wins:
        print("Game over")
        print(f"The correct answer was {choosen_pokemon}")

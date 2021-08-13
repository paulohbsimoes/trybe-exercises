from random import choice, sample

words = ["JavaScript", "Python", "Computer", "Guitar"]

choosen_word = choice(words)

scrambled_word = "".join(sample(choosen_word, len(choosen_word)))

print(f"The hint is: {scrambled_word}")

winner = False

for chances in range(3):
    guess = input("What is your guess? ")
    if guess == choosen_word:
        print("You got it! Congratulations!")
        winner = True
        break
    else:
        print(f"{guess} is the wrong answer")

if not winner:
    print("Game over!")

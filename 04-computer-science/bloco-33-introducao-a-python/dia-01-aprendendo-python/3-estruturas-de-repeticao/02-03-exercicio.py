ratings = [6, 8, 5, 9, 10]

print("Avaliações numa escala de 0 a 10 %s" % ratings)

newRatings = [rating * 10 for rating in ratings]

print("Avaliações numa escala de 0 a 100 %s" % newRatings)

for rating in [rating for rating in newRatings if rating % 3 == 0]:
    print("%d é múltiplo de 3" % rating)

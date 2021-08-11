def fact(num):
    return 1 if (num == 1) else num * fact(num - 1)


NUM = int(input("Gostaria de saber o fatorial de qual número? "))

print("O fatorial de %d é %d" % (NUM, fact(NUM)))

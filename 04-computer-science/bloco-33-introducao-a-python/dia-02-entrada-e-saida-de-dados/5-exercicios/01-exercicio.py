name = input("Qual o nome? ")

for counter in range(len(name), 0, -1):
    print(name[:counter])

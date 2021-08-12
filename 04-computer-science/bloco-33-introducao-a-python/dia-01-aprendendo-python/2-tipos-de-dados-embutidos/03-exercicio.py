frutas = {"Abacate", "Limão"}

print("Frutas: %s" % frutas)

maisFrutas = set()

print("Mais frutas: %s" % maisFrutas)

maisFrutas.add("Apple")
maisFrutas.add("Pera")

print("Mais frutas: %s" % maisFrutas)

print("Todas as frutas: %s" % frutas.union(maisFrutas))

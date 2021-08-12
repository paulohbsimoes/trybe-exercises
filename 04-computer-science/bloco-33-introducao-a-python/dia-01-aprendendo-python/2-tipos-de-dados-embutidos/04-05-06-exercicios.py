info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

print("Personagem: %s" % info["personagem"])

print("\nObjeto antes de adicionar a propriedade recorrente:\n%s\n\n" % info)

info["recorrente"] = True

print("Objeto após adicionar a propriedade recorrente:\n%s\n\n" % info)

del info["origem"]

print("Items do objeto após remover a propriedade origem:\n%s" % info.items())

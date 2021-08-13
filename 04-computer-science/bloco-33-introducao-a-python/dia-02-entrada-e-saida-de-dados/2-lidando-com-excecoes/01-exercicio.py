with open("input.txt", "r") as file:
    lines = file.readlines()
    people = map(lambda line: line.replace("\n", "").split(" "), lines)
    approvedPeople = filter(lambda person: int(person[1]) >= 6, people)

    for name, score in approvedPeople:
        print(f"{name} foi aprovado com {score} pontos")

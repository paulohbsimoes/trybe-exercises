from functools import reduce


def getLongestName(names):
    return reduce(
        lambda result, name: name if len(result) < len(name) else result, names
    )


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


print(getLongestName(names))

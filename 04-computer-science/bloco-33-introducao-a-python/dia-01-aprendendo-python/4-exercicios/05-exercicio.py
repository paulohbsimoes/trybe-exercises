from math import ceil

PRICE_PER_CAN = 80.0


def getAmoutOfPaintInLiters(squareMeters):
    return ceil(squareMeters / 3)


def getAmountOfCans(liters):
    return ceil(liters / 18)


def getBudget(wallSizeInSquareMeters):
    liters = getAmoutOfPaintInLiters(wallSizeInSquareMeters)
    cans = getAmountOfCans(liters)
    price = cans * PRICE_PER_CAN
    return {"cans": cans, "price": price}


if __name__ == "__main__":
    print(getBudget(55))

def printSquare(num):
    if num < 2:
        return

    for count in range(num):
        print("*" * num)


if __name__ == "__main__":
    printSquare(2)

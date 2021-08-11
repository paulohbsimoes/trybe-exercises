def getTransportPrice(numberOfCopies):
    return 3 + ((numberOfCopies - 1) * 0.75)


def getBooksPrice(numberOfCopies=0, unitPrice=0, isLibrary=False):
    subTotal = numberOfCopies * unitPrice
    return (subTotal * 0.6) if isLibrary else subTotal


def getTotalPrice(numberOfCopies=0, unitPrice=0, isLibrary=False):
    transportPrice = getTransportPrice(numberOfCopies)
    booksPrice = getBooksPrice(numberOfCopies, unitPrice, isLibrary)
    return transportPrice + booksPrice


# NUMBER_OF_BOOKS = int(input('How many books? '))
# UNIT_PRICE = int(input('How many for the unit? '))

# IS_LIBRARY = None
# while IS_LIBRARY not in ['yes', 'no']:
#   IS_LIBRARY = input('Are you a library? (yes/no) ').lower()

# IS_LIBRARY = True if (IS_LIBRARY == 'yes') else False

# print('NUMBER_OF_BOOKS %f, UNIT_PRICE %f, IS_LIBRARY %d' % (NUMBER_OF_BOOKS, UNIT_PRICE, IS_LIBRARY))

NUMBER_OF_BOOKS = 60
UNIT_PRICE = 24.20
IS_LIBRARY = True

total = getTotalPrice(NUMBER_OF_BOOKS, UNIT_PRICE, IS_LIBRARY)

print("The total price is %.2f" % total)

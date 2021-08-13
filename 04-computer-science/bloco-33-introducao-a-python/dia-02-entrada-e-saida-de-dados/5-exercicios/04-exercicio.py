import json
import csv

with open("books.json") as file:
    books = json.load(file)

    python_books = list(
        filter(lambda book: "Python" in book["categories"], books)
    )

    java_books = list(filter(lambda book: "Java" in book["categories"], books))

    php_books = list(filter(lambda book: "PHP" in book["categories"], books))

    with open("report.csv", "w") as report:
        books_len = len(books)
        writer = csv.writer(report)
        writer.writerow(("Categoria", "Porcentagem"))
        writer.writerow(("Python", len(python_books) / books_len))
        writer.writerow(("Java", len(java_books) / books_len))
        writer.writerow(("Python", len(php_books) / books_len))

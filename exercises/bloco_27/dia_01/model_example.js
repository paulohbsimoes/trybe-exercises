// use model_example;

db.authors.insertMany([
  { _id: 1, "firstName": "George", "middleName": "R. R.", "lastName": "Martin", "birthday": "1948-09-20", "nationality": "norte-americano" },
  { _id: 2, "firstName": "J.", "middleName": "R. R.", "lastName": "Tolkien", "birthday": "1892-01-03", "nationality": "britânico" },
  { _id: 3, "firstName": "Isaac", "lastName": "Asimov", "birthday": "1920-01-20", "nationality": "russo-americano" },
  { _id: 4, "firstName": "Frank", "lastName": "Herbert", "birthday": "1920-02-11", "nationality": "norte-americano" },
  { _id: 5, "firstName": "Júlio", "lastName": "Verne", "birthday": "1905-03-24", "nationality": "francês" }
])

db.books.insertMany([
  { title: 'A Game of Thrones', author_id: 1 },
  { title: 'A Clash of Kings', author_id: 1 },
  { title: 'A Storm of Swords', author_id: 1 },
  { title: 'The Lord of The Rings - The Fellowship of the Ring', author_id: 2 },
  { title: 'The Lord of The Rings - The Two Towers', author_id: 2 },
  { title: 'The Lord of The Rings - The Return of The King', author_id: 2 },
  { title: 'Foundation', author_id: 3 },
]);

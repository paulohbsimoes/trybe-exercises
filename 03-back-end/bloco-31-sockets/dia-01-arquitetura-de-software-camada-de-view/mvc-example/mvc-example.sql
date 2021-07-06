CREATE DATABASE IF NOT EXISTS mvc_example;

USE mvc_example;

CREATE TABLE authors (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  middle_name VARCHAR(30),
  last_name VARCHAR(30) NOT NULL,
  birthday DATE,
  nationality VARCHAR(100),
  PRIMARY KEY(id)
);

INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
VALUES
  ('George', 'R. R.', 'Martin', '1948-09-20', 'norte-americano'),
  ('J.', 'R. R.', 'Tolkien', '1892-01-03', 'britânico'),
  ('Isaac', NULL, 'Asimov', '1920-01-20', 'russo-americano'),
  ('Frank', NULL, 'Herbert', '1920-02-11', 'norte-americano'),
  ('Júlio', NULL, 'Verne', '1905-03-24', 'francês');

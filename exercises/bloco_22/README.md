# Atividades

1. Caso não tenha feito ainda, refaça o banco de dados **albuns** por conta própria, como está descrito na seção **"Hora de mexer os dedos"**.

![Diagrama entidade relacionamento](./images/diagrama_entidade_relacionamento.png)

```sql
CREATE DATABASE IF NOT EXISTS albums;
USE albums;

CREATE TABLE genre (
  genre_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE artist (
  artist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE album (
  album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL,
  genre_id INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES genre(genre_id),
  FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
);

CREATE TABLE song (
  song_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  duration_in_seconds INT NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(album_id)
);
```

2. Faça [este quiz](https://www.sanfoundry.com/sql-mcqs-mysql-datatypes-1/) sobre tipos de dados no MySQL.

```
1. Character data can be stored as ______________
A: c) Either Fixed or Variable length string

2. Which declaration represents that “character data will consume the same number of bytes as declared and is right padded”?
A: a) Char

3. Which declaration doesn’t use the same number of bytes and consumption of bytes depends on the input data?
A: a) Varchar

4. The maximum length of the char columns is ____________
A: a) 255 bytes

5. The maximum length of the varchar columns is ____________
A: a) Upto 65,535 bytes

6. In oracle database variable length column is declared by ____________
A: c) Varchar2

7. Mysql support different character sets, which command is used to display all character sets?
A: a) SHOW CHARACTER SET;

8. Which one is the correct declaration for choosing the character set other than default?
A: a) Varchar(20) character set utf8;

9. Which “text type” has the maximum number of bytes?
A: d) Long text

10. Which among the following have the maximum bytes?
A: c) Text type
```

3. Faça [este quiz](https://www.sanfoundry.com/sql-mcqs-mysql-datatypes-2/) sobre como escolher tipos de dados no MySQL.

4. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

* Nome;
* Espécie;
* Sexo;
* Idade;
* Localização. Cada animal também possui **um** cuidador, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui **um** gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

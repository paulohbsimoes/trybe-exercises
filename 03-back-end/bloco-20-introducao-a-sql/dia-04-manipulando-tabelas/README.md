# Atividades

## Para fixar - INSERT

Um grande filósofo uma vez disse: **"Practice Makes Perfect"**. Não sabemos quem ele é, mas ele tem razão! Vamos praticar!

1. Insira um novo funcionário na tabela **sakila.staff**.

Para saber quais campos são obrigatórios, clique com o botão direito na tabela **sakila.staff** e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

```sql
INSERT INTO `sakila`.`staff` (
  first_name,
  last_name,
  address_id,
  store_id,
  active,
  username,
  password,
  last_update
) VALUES
('Paulo', 'Simões', 1, 1, 1, 'paulo', 'senha', now());
```

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.

```sql
INSERT INTO `sakila`.`staff` (
  first_name,
  last_name,
  address_id,
  store_id,
  active,
  username,
  password,
  last_update
) VALUES
('Paulo', 'Simões', 1, 1, 1, 'paulo', 'senha', now()),
('Luiz', 'Simões', 1, 1, 1, 'luiz', 'senha', now());
```

3. Selecione os cinco primeiros nomes e sobrenomes da tabela **sakila.customer** e cadastre essas pessoas como atores na tabela **sakila.actor**.

```sql
INSERT INTO `sakila`.`actor` (first_name, last_name)
	SELECT first_name, last_name FROM `sakila`.`customer` LIMIT 5;
```

4. Cadastre três categorias de uma vez só na tabela **sakila.category**.

```sql
INSERT INTO `sakila`.`category` (name)
VALUES
	('Anime'),
  ('Documentário'),
  ('Aventura');
```

5. Cadastre uma nova loja na tabela **sakila.store**.

```sql
INSERT INTO `sakila`.`store` (manager_staff_id, address_id)
VALUES (3, 4);
```

## Para fixar - UPDATE

Como o banco pode ser apagado e recriado infinitamente, vamos desabilitar o **--safe-updates** nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench **sempre** que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos **UPDATE** ou **DELETE**:

```sql
SET SQL_SAFE_UPDATES = 0;
```

1. Atualize o primeiro nome de todas as pessoas da tabela **sakila.actor** que possuem o primeiro nome "JULIA" para "JULES".

```sql
UPDATE `sakila`.`actor`
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
```

2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

```sql
UPDATE `sakila`.`category`
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
```

3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações **"G"**, **"PG"** ou **"PG-13"** e um custo de substituição maior que $20.

```sql
UPDATE `sakila`.`film`
SET rental_rate = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
```

4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

```sql
UPDATE `sakila`.film
SET rental_rate = (
	CASE
		WHEN length > 100 THEN 20
		ELSE 10
	END
);
```

# Para fixar - DELETE

1. Exclua do banco de dados o ator com o nome de "KARL".

```sql

```

2. Exclua do banco de dados os atores com o nome de "MATTHEW".

```sql
SELECT actor_id FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE actor_id = 12;
```

3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

```sql
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
```

4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

```sql
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```

5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

`sakila`.`actor`
```sql
--Nenhuma
```

`sakila`.`address`
```sql
CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`category`
```sql
--Nenhuma
```

`sakila`.`city`
```sql
CONSTRAINT `fk_city_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`country`
```sql
--Nenhuma
```

`sakila`.`customer`
```sql
CONSTRAINT `fk_customer_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_customer_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`film`
```sql
CONSTRAINT `fk_film_language` FOREIGN KEY (`language_id`) REFERENCES `language` (`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_film_language_original` FOREIGN KEY (`original_language_id`) REFERENCES `language` (`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`film_actor`
```sql
CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_film_actor_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`film_category`
```sql
CONSTRAINT `fk_film_category_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_film_category_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`film_text`
```sql
--Nenhuma
```

`sakila`.`inventory`
```sql
CONSTRAINT `fk_inventory_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_inventory_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`language`
```sql
--Nenhuma
```

`sakila`.`payment`
```sql
CONSTRAINT `fk_payment_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_payment_rental` FOREIGN KEY (`rental_id`) REFERENCES `rental` (`rental_id`) ON DELETE SET NULL ON UPDATE CASCADE,
CONSTRAINT `fk_payment_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`rental`
```sql
CONSTRAINT `fk_rental_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_rental_inventory` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inventory_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_rental_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`staff`
```sql
CONSTRAINT `fk_staff_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_staff_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

`sakila`.`store`
```sql
CONSTRAINT `fk_store_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE
```

6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).

```sql
DROP DATABASE sakila;
```

```bash
mysql -h localhost -u root -p < sakila.sql
```

## Exercícios

Os exercícios propostos possuem níveis variáveis de dificuldade. Tente fazer o máximo que conseguir.
Para realizar os exercícios 1 a 7, restaure o banco de dados Pixar abaixo.

```sql
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

**Exercício 1**: Insira as produções da Pixar abaixo na tabela **Movies**:

* Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
* Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
* Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
* WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

```sql
INSERT INTO `Pixar`.`Movies` (
	title,
    director,
    `year`,
    length_minutes    
) VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104)
```

**Exercício 2**: Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela **BoxOffice**.

```sql
SELECT * FROM `Pixar`.`Movies`
WHERE title LIKE "%Nemo%";

INSERT INTO `Pixar`.`BoxOffice` (
	movie_id,
	rating,
  domestic_sales,
  international_sales
) VALUES
(9, 6.8, 450000000, 370000000);
```

**Exercício 3**: O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o **UPDATE**.

```sql
UPDATE `Pixar`.`Movies`
SET director = 'Andrew Staton'
WHERE id = 9;
```

**Exercício 4**: O título do filme "Ratatouille" esta escrito de forma incorreta na tabela **Movies**, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o **UPDATE**.

```sql
SELECT * FROM `Pixar`.`Movies`
WHERE title LIKE "%rata%";

UPDATE `Pixar`.`Movies`
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;
```

**Exercício 5**: Insira as novas classificações abaixo na tabela **BoxOffice**, lembre-se que a coluna movie_id é uma foreign key referente a coluna **id** da tabela **Movies**:

* Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
* Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
* WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

```sql
SELECT * FROM `Pixar`.`Movies`
WHERE title LIKE '%Monstros%'
OR title LIKE '%Incríveis%'
OR title LIKE '%WALL-E%';

INSERT INTO `Pixar`.`BoxOffice` (
	movie_id,
  rating,
  domestic_sales,
  international_sales
) VALUES
(8, 8.5, 300, 250),
(10, 7.4, 460, 510),
(11, 9.9, 290, 280);
```

**Exercício 6**: Exclua da tabela **Movies** o filme "WALL-E".

```sql
SELECT * FROM `Pixar`.`Movies`
WHERE title LIKE "%WALL%";

SELECT * FROM `Pixar`.`BoxOffice`
WHERE movie_id = 11;

DELETE FROM `Pixar`.`BoxOffice`
WHERE movie_id = 11;

DELETE FROM `Pixar`.`Movies`
WHERE id = 11;
```

**Exercício 7**: Exclua da tabela **Movies** todos os filmes dirigidos por "Andrew Staton".

```sql
SELECT * FROM `Pixar`.`Movies`
WHERE director = 'Andrew Staton';

SELECT * FROM `Pixar`.`BoxOffice`
WHERE movie_id IN (2, 9);

DELETE FROM `Pixar`.`BoxOffice`
WHERE movie_id IN (2, 9);

DELETE FROM `Pixar`.`Movies`
WHERE director = 'Andrew Staton';
```

## Bônus

Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados **Pixar**.

**Exercício 8**: Altere a classificação da tabela **BoxOffice** para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

```sql
UPDATE `Pixar`.`BoxOffice`
SET rating = 9.0
WHERE domestic_sales > 400000000;
```

**Exercício 9**: Altere a classificação da tabela **BoxOffice** para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

```sql
UPDATE `Pixar`.`BoxOffice`
SET rating = 6.0
WHERE domestic_sales > 200000000
AND international_sales < 300000000;
```

**Exercício 10**: Exclua da tabela **Movies** todos os filmes com menos de 100 minutos de duração.

```sql
SELECT id FROM `Pixar`.`Movies`
WHERE length_minutes < 100;

SELECT * FROM `Pixar`.`BoxOffice`
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM `Pixar`.`BoxOffice`
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM `Pixar`.`Movies`
WHERE length_minutes < 100;
```

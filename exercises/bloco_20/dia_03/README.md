# Atividades

Entre no banco de dados **sakila** e siga as instruções (e guarde as queries para conferir posteriormente):

## Para fixar - Operadores

1. Precisamos identificar os dados do cliente com o e-mail **LEONARD.SCHOFIELD@sakilacustomer.org**.

```sql
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
```

2. Precisamos de um relatório dos nomes dos clientes, em **ordem alfabética**, que não estão mais ativos no nosso sistema e pertencem à loja com o **id** 2. Porém, não inclua o cliente **KENNETH** no resultado.

```sql
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;
```

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em **ordem alfabética** pelo título.

```sql
SELECT title, description, release_year, replacement_cost
FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;
```

4. Quantos clientes estão **ativos** e na loja **1**?

```sql
SELECT COUNT(*) FROM sakila.customer
WHERE active IS TRUE
AND store_id = 1;
```

5. Mostre todos os detalhes dos clientes que **não** estão ativos na loja **1**.

```sql
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1;
```

6. Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a **menor** taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em **ordem alfabética** pelo título.

```sql
SELECT * FROM sakila.film
WHERE rating = 'R'
ORDER BY rental_rate, title
LIMIT 50;
```

## Para fixar - LIKE

1. Mostre todos os detalhes dos filmes que contêm a palavra **ace** no nome.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%ace%';
```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com **china**.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%china';
```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra **girl** e o título finaliza com a palavra **lord**.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra **gon**.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra **gon** e a descrição contém a palavra **Documentary**.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';
```

6. Mostre os dois filmes cujos títulos ou finalizam com **academy** ou iniciam com **mosquito**.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
```

7. Mostre os seis filmes que contêm as palavras **monkey** e **sumo** em suas descrições.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
```

## Para fixar - IN e BETWEEN

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: **hicks, crawford, henry, boyd, mason, morales e kennedy**, ordenados por nome em ordem alfabética.

```sql
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales','kennedy')
ORDER BY first_name;
```

2. Mostre o e-mail dos clientes com os **address_id 172, 173, 174, 175 e 176**, ordenados em ordem alfabética.

```sql
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
```

3. Descubra quantos pagamentos foram feitos entre **01/05/2005 e 01/08/2005**. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato **ano/mês/dia**, diferente do formato brasileiro, que é **dia/mês/ano**.

```sql
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';
```

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de **3 a 6**. Os resultados devem ser classificados em filmes com **maior duração** de empréstimo primeiro. Em caso de empate, ordene em **ordem alfabética** pelo título.

```sql
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
```

5. Monte um relatório que exiba o título e classificação dos **500** primeiros filmes direcionados para as classificações indicativas **G, PG e PG-13**. Os resultados devem estar **ordenados** por título.

```sql
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```

# Para fixar - Datas

1. Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.

```sql
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';
```

```sql
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-05-25%';
```

2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?

```sql
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN DATE('2005-07-01') AND DATE('2005-08-22')
```

3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.

```sql
SELECT
  DATE(rental_date) AS DATA,
  YEAR(rental_date) AS ANO,
  MONTH(rental_date) AS MÊS,
  DAY(rental_date) AS DIA,
  HOUR(rental_date) AS HORA,
  MINUTE(rental_date) AS MINUTO,
  SECOND(rental_date) AS SEGUNDO
FROM sakila.rental
WHERE rental_id = '10330';
```

4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.

```sql
SELECT * FROM sakila.rental
WHERE DATE(rental_date) = '2005-07-28'
AND HOUR(rental_date) > 22
ORDER BY rental_date;
```

## Exercícios

Para realizar as tarefas do 1 ao 7, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS PecasFornecedores;
CREATE SCHEMA PecasFornecedores;
USE PecasFornecedores;

CREATE TABLE Pecas (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecedores (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecimentos (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  peca INTEGER,
  FOREIGN KEY (peca) REFERENCES Pecas (code),
  Fornecedor VARCHAR(40),
  FOREIGN KEY (fornecedor) REFERENCES Fornecedores (code),
  Preco INTEGER NOT NULL
);

CREATE TABLE Vendas (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecimento INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (fornecimento) REFERENCES Fornecimentos (code)
);

INSERT INTO Fornecedores(code, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO Pecas(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO Fornecimentos(peca, fornecedor, preco)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Vendas(fornecimento, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

1. Escreva uma query para exibir todas as peças que começam com GR.

```sql
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';
```

2. Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.

```sql
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;
```

3. Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.

```sql
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%n%';
```

4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.

```sql
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;
```

5. Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

```sql
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';
```

6. Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.

```sql
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco > 15 AND preco < 40
ORDER BY preco;
```

7. Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

```sql
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN DATE('2018-04-15') AND DATE('2019-07-30');
```

## Bônus

Usando o banco de dados Scientists restaurado no dia anterior, realize os exercícios a seguir. Caso ainda não tenha restaurado o banco, utilize o código abaixo para fazê-lo.

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN, Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra **e** em seu nome.

```sql
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';
```

2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra **A**. Ordene o resultado em ordem alfabética.

```sql
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'a%'
ORDER BY Name;
```

3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número **3**. Ordene o resultado em ordem alfabética.

```sql
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;
```

4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam **AeH3** , **Ast3** ou **Che1**.

```sql
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
```

5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 500;
```

6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.

```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 250 AND Hours < 800;
```

7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome **NÃO** inicie com a letra **A**.

```sql
SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE 'a%';
```

8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra **H**.

```sql
SELECT * FROM Scientists.Projects
WHERE Code LIKE '%H%';
```

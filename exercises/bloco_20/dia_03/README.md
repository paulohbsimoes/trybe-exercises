# Exercícios

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

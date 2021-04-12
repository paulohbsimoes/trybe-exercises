# Exercícios

Entre no banco de dados **sakila** e siga as instruções (e guarde as queries para conferir posteriormente):

## Para fixar - Operadores

1. Precisamos identificar os dados do cliente com o e-mail **LEONARD.SCHOFIELD@sakilacustomer.org**.

```sql
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org'
```

2. Precisamos de um relatório dos nomes dos clientes, em **ordem alfabética** , que não estão mais ativos no nosso sistema e pertencem à loja com o **id** 2. Porém, não inclua o cliente **KENNETH** no resultado.

```sql
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name NOT LIKE 'KENNETH%'
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
AND store_id = 1
```

5. Mostre todos os detalhes dos clientes que **não** estão ativos na loja **1**.

```sql
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1
```

6. Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a **menor** taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em **ordem alfabética** pelo título.

```sql
SELECT * FROM sakila.film
WHERE rating = 'R'
ORDER BY rental_rate, title
LIMIT 50;
```

## Para fixar - LIKE

1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%ace%';
```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%china';
```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';
```

6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.

```sql
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
```

7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.

```sql
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%'
```

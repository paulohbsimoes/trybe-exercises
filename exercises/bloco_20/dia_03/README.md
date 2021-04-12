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

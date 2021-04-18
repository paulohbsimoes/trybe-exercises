# Atividades

## Para fixar - INNER JOIN

Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1. Monte uma query que exiba o **id do ator**, **nome do ator** e **id do filme** em que ele já atuou usando as tabelas **actor** e **film_actor**.

```sql
SELECT 
  F.actor_id,
  CONCAT(A.first_name, ' ', A.last_name) AS actor_name,
  F.film_id
FROM sakila.film_actor AS F
INNER JOIN sakila.actor AS A
ON F.actor_id = A.actor_id
```

2. Use o **JOIN** para exibir o **nome**, **sobrenome** e **endereço** de cada um dos funcionários do banco. Use as tabelas **staff** e **address**.

```sql
SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;
```

3. Exiba o **id do cliente**, **nome** e **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o **id do endereço** e o **nome da rua** onde o cliente mora. Essas informações podem ser encontradas nas tabelas **customer** e **address**.

```sql
SELECT
  C.customer_id,
  C.first_name,
  C.email,
  C.address_id,
  A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY first_name
LIMIT 100;
```

4. Exiba o **nome**, **email**, **id do endereço**, **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas **address** e **customer**.

```sql
SELECT
  C.first_name,
  C.email,
  C.address_id,
  A.address,
  A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE district = 'California'
AND first_name LIKE '%rene%';
```

5. Exiba o **nome** e a **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela **address** e **customer**.

```sql
SELECT
  -- CONCAT(C.first_name, ' ', C.last_name) AS customer_name,
  C.first_name AS customer_name,
  COUNT(A.address) AS number_of_addresses
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE active = 1
GROUP BY customer_name
ORDER BY customer_name DESC;
```

6. Monte uma query que exiba o **nome**, **sobrenome** e a **média de valor** ( **amount** ) paga aos funcionários no ano de 2006. Use as tabelas **payment** e **staff**. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

```sql
SELECT
  CONCAT(S.first_name, ' ', S.last_name) AS staff_name,
  AVG(P.amount) AS payment_average
FROM sakila.payment AS P
INNER JOIN sakila.staff AS S
ON P.staff_id = S.staff_id
WHERE YEAR(P.payment_date) = '2006'
GROUP BY staff_name;
```

7. Monte uma query que exiba o **id do ator**, **nome**, **id do filme** e **título do filme**, usando as tabelas **actor**, **film_actor** e **film**. Dica: você precisará fazer mais de um **JOIN** na mesma query.

```sql
SELECT
  FA.actor_id,
  CONCAT(A.first_name, ' ', A.last_name) AS actor_name,
  FA.film_id,
  F.title
FROM sakila.film_actor AS FA
INNER JOIN sakila.actor AS A ON FA.actor_id = A.actor_id
INNER JOIN sakila.film AS F ON FA.film_id = F.film_id
```

## Para fixar - SELF JOIN

1. Queremos saber os **ids** e **custos de substituição** dos filmes que possuem o mesmo custo de substituição.

```sql
SELECT 
  F1.film_id AS filmA,
  F2.film_id AS filmB,
  F1.replacement_cost
FROM sakila.film AS F1, sakila.film AS F2
WHERE F1.replacement_cost = F2.replacement_cost
ORDER BY filmA, filmB;
```

2. Exiba o **título** e a **duração de empréstimo** dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

```sql
SELECT 
  F1.title AS titleA,
  F2.title AS titleB,
  F1.rental_duration
FROM sakila.film AS F1, sakila.film AS F2
WHERE F1.length = F2.length
AND F1.rental_duration BETWEEN 2 AND 4
AND F2.rental_duration BETWEEN 2 AND 4
ORDER BY titleA, titleB;
```

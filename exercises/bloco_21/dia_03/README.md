# Atividades

## Desafios - Stored Procedure

Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila .

1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

```sql
USE sakila;
DELIMITER $$

CREATE PROCEDURE getTopTenActors()
BEGIN
  SELECT A.actor_id, COUNT(*) AS number_of_films
  FROM film_actor as FA
  LEFT JOIN actor AS A
  ON FA.actor_id = A.actor_id
  GROUP BY A.actor_id
  ORDER BY number_of_films DESC
  LIMIT 10;
END $$

DELIMITER ;

CALL getTopTenActors();
```

2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

```sql
USE sakila;
DELIMITER $$

CREATE PROCEDURE getFilmsByCategory(IN categoryName VARCHAR(25))
BEGIN
  SELECT F.film_id, F.title, C.category_id, C.`name`
  FROM film_category AS FC
  LEFT JOIN category AS C
  ON FC.category_id = C.category_id
  LEFT JOIN film AS F
  ON FC.film_id = F.film_id
  WHERE C.`name` = categoryName;
END $$

DELIMITER ;

CALL getFilmsByCategory('Action');
```

3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

```sql
USE sakila;
DELIMITER $$

CREATE PROCEDURE getCustomerByEmail(
  IN customerEmail VARCHAR(50),
  OUT result TEXT
)
BEGIN
  SELECT
    CONCAT(
      'O cliente com email ',
      customerEmail, ' está ',
      IF(`active`, 'ativo', 'inativo'), '.'
	) INTO result
  FROM customer
  WHERE email LIKE customerEmail;
END $$

DELIMITER ;

CALL getCustomerByEmail('HARRY.ARCE@sakilacustomer.org', @result);
SELECT @result;
```

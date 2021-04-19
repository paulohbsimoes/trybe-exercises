# Atividades

## Desafios - Stored Procedure

Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila.

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

2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.

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

## Para fixar - Stored Functions

1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.

```sql
USE sakila;
DELIMITER $$

CREATE FUNCTION numberOfPaymentsFromClientId(customerId INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE result INT;
  SELECT COUNT(*) from payment
  GROUP BY customer_id
  HAVING customer_id = customerId
  INTO result;
  RETURN result;
END $$

DELIMITER ;

SELECT numberOfPaymentsFromClientId(5);
```

2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.

```sql
USE sakila;
DELIMITER $$

CREATE FUNCTION getInventoryMovieNameFromId(inventoryId INT)
RETURNS VARCHAR(128) READS SQL DATA
BEGIN
  DECLARE result VARCHAR(128);
  SELECT F.title FROM inventory AS I
  INNER JOIN film AS F
  ON I.film_id = F.film_id
  WHERE I.inventory_id = inventoryId
  INTO result;
  RETURN result;
END $$

DELIMITER ;

SELECT getInventoryMovieNameFromId(15);
```

3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

```sql
USE sakila;
DELIMITER $$

CREATE FUNCTION getNumberOfFilmsOfCategoryFromId(categoryName varchar(25))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE result INT;
  SELECT COUNT(*) FROM film_category AS FC
  LEFT JOIN film AS F
  ON FC.film_id = F.film_id
  LEFT JOIN category AS C
  ON FC.category_id = C.category_id
  GROUP BY C.name
  HAVING C.name = categoryName
  INTO result;
  RETURN result;
END $$

DELIMITER ;

SELECT getNumberOfFilmsOfCategoryFromId('Classics');
```

## Para fixar - TRIGGERS

Considerando as tabelas e os banco de dados abaixo:

```sql
CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;
```

1. Crie um **TRIGGER** que, a cada nova inserção feita na tabela **carros**, defina o valor da coluna **data_atualizacao** para o momento do ocorrido, a **acao** para **'INSERÇÃO'** e a coluna **disponivel_em_estoque** para **1**.

```sql
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_insert
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'INSERÇÃO',
    NEW.disponivel_em_estoque = 1;
END

$$ DELIMITER ;

INSERT INTO carros (preco)
VALUES (25000), (50000);
```

2. Crie um **TRIGGER** que, a cada atualização feita na tabela **carros**, defina o valor da coluna **data_atualizacao** para o momento do ocorrido e a **acao** para **'ATUALIZAÇÃO'**.

```sql
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_update
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZAÇÃO';
END

$$ DELIMITER ;

UPDATE carros
SET preco = preco
WHERE id_carro = 7;
```

3. Crie um **TRIGGER** que, a cada exclusão feita na tabela **carros**, envie para a tabela **log_operacoes** as informações do **tipo_operacao** como **'EXCLUSÃO'** e a **data_ocorrido** como o momento da operação.

```sql
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_delete
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes (
    tipo_operacao,
    data_ocorrido
  ) VALUES ('EXCLUSÃO', NOW());
END

$$ DELIMITER ;

DELETE FROM carros
WHERE id_carro = 9;
```

## Exercícios

Para realizar os exercícios a seguir, execute este script:

```sql
CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;
```

1. Crie um **Trigger** para **INSERT** que deve definir o valor do campo **release_year** da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro **Trigger** para **INSERT** que adiciona um novo registro na tabela **movies_logs**, informando o **movie_id** do filme que acaba de ser inserido na tabela **movies**, a **action** como **'INSERT'** e a **log_date** como a data atual.

```sql
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_insert
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_movies_logs_insert
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
  INSERT INTO movies_logs (
    movie_id, `action`, log_date
  ) VALUES (NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

INSERT INTO movies (ticket_price) VALUES (13)
```

2. Crie um **Trigger** para **UPDATE** que, ao receber uma alteração na tabela **movies**, deve comparar o valor anterior de **ticket_price** com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna **ticket_price_estimation** o valor de **'Increasing'**. Caso contrário, insira o valor **'Decreasing'**. Adicionalmente, insira um novo registro na tabela **movies_logs**, contendo informações sobre o registro alterado ( **movie_id**, **action** e **log_date** ).

```sql
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_update
BEFORE UPDATE ON movies
FOR EACH ROW

BEGIN
  SET NEW.ticket_price_estimation = IF(
	NEW.ticket_price > OLD.ticket_price,
    'Increasing',
    'Decreasing'
  );
END $$

CREATE TRIGGER trigger_movies_logs_update
AFTER UPDATE ON movies
FOR EACH ROW

BEGIN
  INSERT INTO movies_logs (
    movie_id,
    `action`,
    log_date
  ) VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

UPDATE movies
SET ticket_price = 10
WHERE movie_id = 5;
```

3. Crie um **Trigger** na tabela **movies** que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela **movies_logs**, onde devem ser guardados a data da exclusão, a **action 'DELETE'** e o id do filme excluído.

```sql
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movies_delete
AFTER DELETE ON movies
FOR EACH ROW

BEGIN
  INSERT INTO movies_logs (
    movie_id,
    `action`,
    log_date
  ) VALUES (OLD.movie_id, 'DELETE', NOW());
END

$$ DELIMITER ;

DELETE FROM movies
WHERE movie_id = 2;
```

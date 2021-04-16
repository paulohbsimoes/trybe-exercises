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

Como o banco pode ser apagado e recriado infinitamente, vamos desabilitar o **--safe-updates** nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench **sempre** que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos **UPDATE** ou **DELETE** :

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

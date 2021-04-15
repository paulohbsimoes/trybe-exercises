# Atividades

## Para fixar - INSERT

Um grande filósofo uma vez disse: **"Practice Makes Perfect"** . Não sabemos quem ele é, mas ele tem razão! Vamos praticar!

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

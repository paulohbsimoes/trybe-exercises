# Atividades

## Para fixar - Manipulação de strings

1. Faça uma query que exiba a palavra **'trybe'** em CAIXA ALTA.

```sql
SELECT UCASE('trybe');
```

2. Faça uma query que transforme a frase **'Você já ouviu falar do DuckDuckGo?'** em 'Você já ouviu falar do Google?'.

```sql
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
```

3. Utilizando uma query, encontre quantos caracteres temos em **'Uma frase qualquer'**.

```sql
SELECT LENGTH('Uma frase qualquer');
```

4. Extraia e retorne a palavra "JavaScript" da frase **'A linguagem JavaScript está entre as mais usadas'**.

```sql
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
```

5. Por fim, padronize a string **'RUA NORTE 1500, SÃO PAULO, BRASIL'** para que suas informações estejam todas em caixa baixa.

```sql
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
```

## Para fixar - Condicionais

1. Usando o **IF** na tabela **sakila.film**, exiba o **id do filme**, o **título** e uma coluna extra chamada **'conheço o filme?'**, em que deve-se avaliar se o nome do filme é **'ACE GOLDFINGER'**. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

```sql
SELECT
	film_id,
  title,
  IF (
    title = 'ACE GOLDFINGER',
    'Já assisti a esse filme',
    'Não conheço o filme'
  ) AS 'conheço o filme?'
FROM sakila.film;
```

2. Usando o **CASE** na tabela **sakila.film**, exiba o **título**, a **classificação indicativa** ( **rating** ) e uma coluna extra que vamos chamar de **'público-alvo'**, em que classificaremos o filme de acordo com as seguintes siglas:

* **G:** "Livre para todos";
* **PG:** "Não recomendado para menores de 10 anos";
* **PG-13:** "Não recomendado para menores de 13 anos";
* **R:** "Não recomendado para menores de 17 anos";
* **Se não cair em nenhuma das classificações anteriores**: "Proibido para menores de idade".

```sql
SELECT
  title,
  rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'publico-alvo'
FROM sakila.film;
```

## Desafios com DIV e MOD

1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.

```sql
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Usando um número aleatório
SET @num = FLOOR(RAND() * 100);
SELECT @num AS 'Número', IF(@num MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
```

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

```sql
SELECT 220 DIV 12; -- 18 grupos
```

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

```sql
SELECT 220 MOD 12; -- Sim, 4 lugares
```

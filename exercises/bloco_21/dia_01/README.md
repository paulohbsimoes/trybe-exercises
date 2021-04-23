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

1. Monte uma query usando o **MOD** juntamente com o **IF** para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de **'Par ou Ímpar'**, onde ela pode dizer 'Par' ou 'Ímpar'.

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

## Para fixar - Funções mais usadas no SQL

1. Monte uma query que gere um valor entre **15 e 20**.

```sql
SELECT 15 + FLOOR(RAND() * 6);
```

2. Monte uma query que exiba o valor arredondado de **15.75** com uma precisão de 5 casas decimais.

```sql
SELECT ROUND(15.75, 5);
```

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o **valor aproximado** para baixo dessa média?

```sql
SELECT FLOOR(39.494);
```

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o **valor aproximado** para cima dessa média?

```sql
SELECT CEIL(85.234);
```

## Para fixar - Trabalhando com datas

1. Monte uma query que exiba a diferença de dias entre **'2030-01-20'** e hoje.

```sql
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
```

2. Monte uma query exiba a diferença de horas entre **'10:25:45'** e **'11:00:00'**.

```sql
SELECT TIMEDIFF('10:25:45', '11:00:00');
```

## Para fixar - Funções de agregação

Monte um query que exiba:

1. A **média de duração** dos filmes e dê o nome da coluna de 'Média de Duração';

```sql
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
```

2. A **duração mínima** dos filmes como 'Duração Mínima';

```sql
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
```

3. A **duração máxima** dos filmes como 'Duração Máxima';

```sql
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
```

4. A **soma de todas** as durações como 'Tempo de Exibição Total';

```sql
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
```

5. E finalmente, a **quantidade total** de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

```sql
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;
```

## Para fixar - GROUB BY

1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela **sakila.customer** que estão ativos e a quantidade que estão inativos.

```sql
SELECT IF(active, 'ATIVO', 'INATIVO') AS 'Status', COUNT(*) AS 'Número de clientes'
FROM sakila.customer
GROUP BY active;
```

2. Monte uma query para a tabela **sakila.customer** que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o **ID da loja**, o **status dos clientes** (ativos ou inativos) e a **quantidade de clientes por status**.

```sql
SELECT 
  store_id AS 'ID da loja',
  IF(`active`, 'Ativo', 'Inativo') AS 'Status',
  COUNT(*) AS 'Quantidade de clientes'
FROM sakila.customer GROUP BY store_id, `active`
ORDER BY store_id, `active` DESC;
```

3. Monte uma query que exiba a **média de duração** por **classificação indicativa** ( **rating** ) dos filmes cadastrados na tabela **sakila.film**. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

```sql
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
ORDER BY average_length DESC;
```

4. Monte uma query para a tabela **sakila.address** que exiba o **nome do distrito** e a **quantidade** de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

```sql
SELECT district, COUNT(*) AS number_of_addresses
FROM sakila.address
GROUP BY district
ORDER BY number_of_addresses DESC;
```

## Para fixar - HAVING

1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um **alias** (apelido) à coluna gerada por **AVG(length)**, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

```sql
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
```

```sql
-- Resposta
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115.0 AND 121.50
ORDER BY average_length DESC;
```

2. Usando a query a seguir, exiba apenas os valores de **total de substituição de custo** que estão acima de $3950.50. Dê um **alias** que faça sentido para **SUM(replacement_cost)**, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

```sql
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

```sql
-- Resposta
SELECT rating, SUM(replacement_cost) AS replacement_cost_sum
FROM sakila.film
GROUP by rating
HAVING replacement_cost_sum > 3950.50
ORDER BY replacement_cost_sum
```

## Exercícios

**Restaure o banco de dados abaixo antes de continuar:**

Para realizar os exercícios propostos para o dia, **faremos uso da tabela employees** do banco de dados **hr**. O banco de dados ser gerado e restaurado usando [este arquivo SQL](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql)).

Instruções de como restaurar o banco de dados:

* Baixe o conteúdo do arquivo.sql linkado acima;
* Copie todo o código SQL;
* Abra o MySQL Workbench e abra uma nova janela de query;
* Copie todo o código para dentro dessa janela;
* Selecione todo o código usando Ctrl + A;
* Execute o código teclando Ctrl + ENTER.

Exercícios:

1. Escreva uma query que exiba o maior salário da tabela.

```sql
SELECT MAX(SALARY) FROM hr.employees;
```

2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

```sql
SELECT MAX(SALARY), MIN(SALARY), MAX(SALARY) - MIN(SALARY)
FROM hr.employees;
```

3. Escreva uma query que exiba a média salarial de cada **JOB_ID**, ordenando pela média salarial em ordem decrescente.

```sql
SELECT JOB_ID, AVG(SALARY) AS SALARY_AVERAGE
FROM hr.employees
GROUP BY JOB_ID
ORDER BY SALARY_AVERAGE DESC;
```

4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

```sql
SELECT SUM(SALARY) FROM hr.employees;
```

5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

```sql
SELECT
  ROUND(MAX(SALARY), 2),
  ROUND(MIN(SALARY), 2),
  ROUND(SUM(SALARY), 2),
  ROUND(AVG(SALARY), 2)
FROM hr.employees;
```

6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( **IT_PROG** ).

```sql
SELECT COUNT(*) FROM hr.employees
WHERE JOB_ID = 'IT_PROG';
```

7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( **JOB_ID** ).

```sql
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;
```

8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( **IT_PROG** ).

```sql
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
```

9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( **IT_PROG** ).

```sql
SELECT JOB_ID, AVG(SALARY) AS SALARY_AVERAGE
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY SALARY_AVERAGE DESC;
```

10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. **Dica**: agrupe pelo **department_id**.

```sql
SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*)
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;
```

11. Escreva uma query que atualize a coluna **PHONE_NUMBER**, de modo que todos os telefones iniciados por **515** agora devem iniciar com **777**.

```sql
UPDATE hr.employees
SET PHONE_NUMBER = CONCAT('777', SUBSTRING(PHONE_NUMBER, 4))
WHERE PHONE_NUMBER LIKE '515%';
```

12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

```sql
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;
```

13. Escreva uma query que exiba as seguintes informações de cada funcionário: **id**, **primeiro nome** e **ano no qual foi contratado** (exiba somente o ano).

```sql
SELECT 
  EMPLOYEE_ID,
  FIRST_NAME,
  YEAR(HIRE_DATE)
FROM hr.employees;
```

14. Escreva uma query que exiba as seguintes informações de cada funcionário: **id**, **primeiro nome** e **dia do mês no qual foi contratado** (exiba somente o dia).

```sql
SELECT 
  EMPLOYEE_ID,
  FIRST_NAME,
  DAY(HIRE_DATE)
FROM hr.employees;
```

15. Escreva uma query que exiba as seguintes informações de cada funcionário: **id**, **primeiro nome** e **mês no qual foi contratado** (exiba somente o mês).

```sql
SELECT 
  EMPLOYEE_ID,
  FIRST_NAME,
  MONTH(HIRE_DATE)
FROM hr.employees;
```

16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

```sql
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM hr.employees;
```

17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

```sql
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7
AND YEAR(HIRE_DATE) = 1987;

-- Alternativa
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE HIRE_DATE LIKE '1987-07%';
```

18. Escreva uma query que exiba as seguintes informações de cada funcionário: **nome**, **sobrenome**, **tempo que trabalha na empresa (em dias)**.

```sql
SELECT 
  FIRST_NAME,
  LAST_NAME,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE)
FROM hr.employees;
```

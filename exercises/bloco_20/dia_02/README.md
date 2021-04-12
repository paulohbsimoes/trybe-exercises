# Exercícios

Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados.

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

### 1. Escreva uma query para exibir a string "This is an SQL Exercise, Practice and Solution".

SELECT "This is an SQL Exercise, Practice and Solution";

### 2. Escreva uma query para exibir três números em três colunas.

SELECT 1 AS PRIMEIRO, 2 AS SEGUNDO, 3 AS TERCEIRO;

### 3. Escreva uma query para exibir a soma dos números 10 e 15.

SELECT 10 + 15;

### 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

SELECT 10 / 3;

### 5. Escreva uma query para exibir todas as informações de todos os cientistas.

SELECT * FROM Scientists.Scientists;

### 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

### 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

SELECT * FROM Scientists.Scientists ORDER BY Name;

### 8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

SELECT * FROM Scientists.Projects ORDER BY Name DESC;

### 9. Escreva uma query que exiba a string "O projeto **Name** precisou de **Hours** horas para ser concluído." para cada projeto.

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluído.') FROM Scientists.Projects;

### 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

SELECT Name, Hours from Scientists.Projects ORDER BY Hours DESC LIMIT 3;

### 11. Escreva uma query para exibir o código de todos os projetos da tabela **AssignedTo** sem que haja repetições.

SELECT DISTINCT Project from Scientists.AssignedTo;

### 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

SELECT Name from Scientists.Projects ORDER BY Hours DESC LIMIT 1;

### 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

### 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

### 15. Escreva uma query que exiba a string "Existem **Number** cientistas na tabela Scientists.", em que **Number** se refira a quantidade de cientistas.

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') FROM Scientists.Scientists;

## Bônus

Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

```SQL
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).


### 1. Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.

SELECT Code, Name FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;

### 2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

SELECT * FROM PiecesProviders.Provides ORDER BY Price Desc LIMIT 5;

### 3. Escreva uma query para exibir o nome das empresas e preço das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.

SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 100 OFFSET 2;

### 4. Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.

SELECT CONCAT('A peça mais cara é a ', Piece, ' provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM Provides ORDER BY Price DESC LIMIT 1;

## Operações básicas

**1 -** No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

**2 -** Declare e inicialize uma variável: **hours = 6**. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis **minutes** e **seconds** que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

**3 -** Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.

**4 -** Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

## Tipos de dados embutidos

Copie a lista abaixo para realizarmos os exercícios de fixação 5 e 6:

```python
trybe_course = ["Introdução", "Front-end", "Back-end"]
```

**1 -** Adicione o elemento "Ciência da Computação" à lista.

**2 -** Acesse e altere o primeiro elemento da lista para "Fundamentos".

**3 -** Um conjunto ou set pode ser inicializado utilizando-se também o método `set()`. Inicialize uma variável com essa função `var = set()` e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

Vamos fixar os aprendizados sobre dicts?

Utilizando o código abaixo, faça os exercícios de fixação 4, 5 e 6:

```python
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
```

Em JavaScript, não precisávamos colocar a chave do objeto entre aspas, porém, em Python, isso é necessário.

**4 -** O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando **object.key**?

**5 -** Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.

**6 -** Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

**7 -** Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: **"Thiago", "Nobre", 29**. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.

**Resposta:** Tuplas.

**8 -** Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

**Resposta:** Listas. Ao armazenar os valores na lista podemos efetuar a contagem usando o método `count`.

## Estruturas de repetição

**1 -** O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois **5! = 1 * 2 * 3 * 4 * 5**. Escreva um código que calcule o fatorial de um número inteiro.

**2 -** Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações **ratings = [6, 8, 5, 9, 10]**. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser **[60, 80, 50, 90, 100]**.

Experimente utilizar a sintaxe de compreensão de listas.

**3 -** Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

## Agora a prática

**1 -** Crie uma função que receba dois números e retorne o maior deles.

**2 -** Calcule a média aritmética dos valores contidos em uma lista.

**3 -** Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

```python
n = 5

*****
*****
*****
*****
*****
```

🦜 Dica: A função **print** aceita um parâmetro nomeado **end** que pode ser utilizado para imprimir sem a quebra de linha. Por exemplo, **print(4, end="")** e **print(2)** irá imprimir 42 e depois quebrar a linha.
Sentiu aí um certo dejavu? 😁

**4 -** Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para **["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]**, o retorno deve ser **"Fernanda"**.

🦜 Uma dica: Utilize a função **len()** para verificar o tamanho do nome.

**5 -** Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

**6 -** Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou **"não é triangulo"**, caso não seja possível formar um triângulo.

🦜 Dica:

```bash
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes.
```

## Bônus

**1 -** Dada uma lista, descubra o menor elemento. Por exemplo, **[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]** deve retornar 2.

**2 -** Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:

```python
n = 5

*
**
***
****
*****
```

**3 -** Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

**4 -** Um posto está vendendo combustíveis com a seguinte tabela de descontos:

```bash
Álcool:
  - Até 20 litros, desconto de 3% por litro;
  - Acima de 20 litros, desconto de 5% por litro.
Gasolina:
  - Até 20 litros, desconto de 4% por litro;
  - Acima de 20 litros, desconto de 6% por litro.
```

Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

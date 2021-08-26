## Agora a prática

Vamos exercitar nossa capacidade de abstração em diferentes cenários. Em cada exercício reflita sobre a modelagem, as características, o comportamento e relações entre as classes e as implemente em Python!

**1 -** Em um contexto de orientação a objetos, como podemos definir o que são mensagens e qual a sua importância?

**Resposta:** Mensagem é a forma como os objetos interagem, mais focado em "o que fazer" do que "como fazer"

**2 -** Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?

🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte notação para descrever nossas abstrações:

```python
Nome da abstração
Quadrado

atributos/estados
- lado (tamanho)

comportamentos
- calcular area (lado * lado)
- calcular perímetro (4 * lado)
```

**Resposta:** A classe retângulo poderia ter dois atributos: **altura** e **comprimento**. Também teria um método `calcula_area` e `calcula_perímetro`.

```python
Nome da abstração
Retângulo

Atributos/Estados
- altura
- comprimento

Comportamentos
- calcular area (altura * comprimento)
- calcular perímetro ((altura + comprimento) * 2)
```

**3 -** E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?

```python
Nome da abstração
Círculo

Atributos/Estados
- raio

Comportamentos
- calcular area (pi * raio * raio)
- calcular perímetro (2 * pi * raio)
```

**4 -** Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?

**Resposta:** Podemos criar uma classe para representar os itens e outra para representar os pedidos.

```python
Nome da abstração
Item

Atributos/Estados
- preço
- código de barras
- tipo de produto

Comportamentos
- mudar preço
```

```python
Nome da abstração
Pedido

Atributos/Estados
- lista de items
- status

Comportamentos
- adicionar items
- remover items
- mudar status do pedido
- concluir pedido
```

**5 -** Notou que os pilares da orientação a objetos começam a manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora então modelarmos uma televisão?

🐦 Pense em como encapsular comportamentos como o estado (ligado/desligado), ou a taxa de variação do volume, que muda de TV para TV etc.

```python
Nome da abstração
Televisão

Atributos/Estados
- status (ligada/desligada)
- canal selecionado
- volume

Comportamentos
- toggle status
- mudar para o próximo canal
- mudar para o canal anterior
- aumentar volume
- diminuir volume
- mutar
```

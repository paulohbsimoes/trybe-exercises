# Bloco 26 - Dia 5

**Atividade 4** desenvolvida em grupo com: [Gabriel Donnantuoni](https://github.com/gabrielDonnantuoni), [Gustavo Thirion](https://github.com/Gustaft86) e [Rafael Greco](https://github.com/Rmgreco).

O restante das atividades realizei em dupla com a [Rosiele](https://github.com/rosids).

## Atividades

### Atividade 1: ✔️

Rota: **/login**

Objetivo: Receber uma requisição que envie email/senha e receba um **token** como resposta. O formato desse **token** deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato **email@mail.com** e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro **email or password is incorrect**. e seu devido status code.

### Atividade 2: ✔️

Rota: **/btc/price**

Objetivo: Receber uma requisição com um **token** e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do **token** esteja incorreto, devolva o erro como resposta **invalid token**. Caso o formato do **token** esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O **token** será passado pelo header da seguinte forma: Authorization: asd65asd5sd8

### Atividade 3: ✔️

Rotas: **/posts/:id** e **/posts**

Objetivo: Deve receber uma requisição com o param **id** e verificar a existência do post com aquele **id**. Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem **id not found**. A rota **/posts** deve trazer todos os posts cadastrados.

```javascript
const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
]
```

### Atividade 4: ✔️

Rota: **/user/:name**

Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem **user not found**.

```javascript
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]
```

### Atividade 5: ✔️

Rota: **/:operacao/:numero1/:numero2**

Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser **soma**, **subtração**, **divisão** ou **multiplicação**. Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.

### Atividade 6: ✔️

Rota: **/recipe/:id**

Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro **recipe not found**.

Use o array abaixo para simular o banco de dados:

```javascript
const recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  }
]
```

### Atividade 7: ✔️

Rota: **/recipe/:id**

Objetivo: Deve receber uma requisição com **name** e **ingredientes** de uma receita, e substituir no banco de dados a receita que possua o **id** passado na requisição. Caso o **id** fornecido não exista, retorne um erro **recipe not found**.

Use o array abaixo para simular o banco de dados:

```javascript
const recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  }
]
```

### Atividade 8: ✔️

Rota: **/comments**

Objetivo: Deve retornar todos os comentários. Se houver um query param **filter** na requisição, deve retornar apenas os comentários que incluem o filtro.
Use o array abaixo para simular o banco de dados:

```javascript
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]
```

### Atividade 9: ✔️

Rota: **/user/:id**

Objetivo: Deve receber no campo **status** um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error **"user isn't found"**.

Use o array abaixo para simular o banco de dados:

```javascript
const users = [
  {
    id: 2,
    user: 'marcos',
    isActive:true
  },
  {
    id: 3,
    user: 'paulo',
    isActive:true

  },
   {
    id: 4,
    user: 'roger',
    isActive:false
  }
]
```

### Atividade 10: ✔️

Rota: **/recipe/:id/ingredients**

Objetivo: Deve receber uma requisição com os campos **remove** e/ou **insert**. O valor deve ser um array de ingredientes para remover ou adicionar na receita correspondente. Caso o **id** fornecido não exista, retorne um erro **recipe not found**.

Use o array abaixo para simular o banco de dados:

```javascript
const recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  }
]
```

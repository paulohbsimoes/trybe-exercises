## Para fixar - Aplicando condições ao join com $lookup

Utilizando o banco de dados **agg_example**, adicione a seguinte **collection** e faça os exercícios:

```javascript
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);
```

1. Selecione todos os clientes com as suas respectivas transações feitas;

```javascript
db.clients.aggregate(
  {
    $lookup: {
      from: "transactions",
      let: { clientName: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$clientName", "$from"]
            }
          }
        }
      ],
      as: "transacoes_feitas"
    }
  }
);
```

2. Selecione quatro clientes com as suas respectivas transações recebidas;

```javascript
db.clients.aggregate(
  {
    $lookup: {
      from: "transactions",
      let: { clientName: "$name" },
      pipeline: [{
        $match: {
          $expr: {
            $eq: ["$to", "$$clientName"]
          }
        }
      }],
      as: "transacoes_recebidas"
    }
  },
  { $limit: 4 }
);
```

3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

```javascript
db.clients.aggregate(
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      let: { clientName: "$name" },
      pipeline: [{
        $match: {
          $expr: {
            $eq: ["$to", "$$clientName"]
          }
        }
      }],
      as: "transacoes_recebidas"
    }
  }
);
```

Antes de avançarmos no conteúdo, crie um banco de dados chamado **storage** e rode a **query** abaixo. Ele será necessário para os próximos exercícios de fixação.

```javascript
db.products.insertMany([
  { "name": "Ball", "purchase_price": 7.6, "taxes": 1.9, "sale_price": 12.5, "quantity": 5 },
  { "name": "Baseball bat", "purchase_price": 18.5, "taxes": 5.3, "sale_price": 39.9, "quantity": 12 },
  { "name": "Sneakers", "purchase_price": 10.4, "taxes": 1.50, "sale_price": 14.9, "quantity": 3 },
  { "name": "Gloves", "purchase_price": 2.85, "taxes": 0.90, "sale_price": 5.70, "quantity": 34 },
  { "name": "Jacket", "purchase_price": 28.9, "taxes": 10.80, "sale_price": 59.9, "quantity": 20 },
  { "name": "Mousepad", "purchase_price": 16.6, "taxes": 3.40, "sale_price": 29.9, "quantity": 8 },
  { "name": "Monitor", "purchase_price": 119.9, "taxes": 39.20, "sale_price": 240.6, "quantity": 11 },
]);
```

## Para fixar - Expressão $add

Utilizando o banco de dados **storage**, faça o seguinte exercício:

1. Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

```javascript
db.products.aggregate(
  { $project: { _id: 0, custoTotal: { $add: ["$purchase_price", "$taxes"] } } }
);
```

## Para fixar - Expressão $subtract

Utilizando o banco de dados storage, faça o seguinte exercício:

1. Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.

```javascript
db.products.aggregate(
  {
    $project: {
      _id: 0,
      lucroTotal: {
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] }
        ]
      }
    }
  }
);
```

## Para fixar - Expressão $round

Utilizando o banco de dados storage, faça os seguintes exercícios:

1. Retorne o menor número inteiro relativo ao preço de venda de cada produto;

```javascript
db.products.aggregate(
  { 
    $project: {
      sale_price: 1,
      floorPrecoDeVenda: { $floor: "$sale_price" }
    }
  }
);
```

2. Retorne o maior número inteiro relativo ao lucro total sobre cada produto.

```javascript
db.products.aggregate(
  {
    $project: {
      lucroTotal: {
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] }
        ]
      }
    }
  },
  {
    $project: {
      lucroTotal: 1,
      ceilLucroTotal: { $ceil: "$lucroTotal" }
    }
  }
);
```

## Para fixar - Expressão $abs

Utilizando o banco de dados storage, faça o seguinte exercício:

1. Calcule o valor absoluto do lucro total de cada produto.

```javascript
db.products.aggregate(
  { 
    $project: {
      lucroTotalAbsoluto: {
        $abs: {
          $subtract: [
            { $add: ["$purchase_price", "$taxes"] },
            "$sale_price"
          ]
        }
      }
    }
  }
);
```

## Para fixar - $multiply

Utilizando o banco de dados storage, faça os seguintes exercícios:

1. Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;

```javascript
db.products.aggregate(
  {
    $project: {
      valorTotalEmEstoque: {
        $multiply: ["$purchase_price", "$quantity"]
      }
    }
  }
);
```

2. Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.

```javascript
db.products.aggregate(
  {
    $project: {
      lucroTotal: {
        $multiply: [
          { 
            $subtract: [
              "$sale_price",
              { $add: ["$purchase_price", "$taxes"] }
            ]
          },
          "$quantity"
        ]
      }
    }
  }
);
```

## Para fixar - $divide

Utilizando o banco de dados **storage**, faça o seguinte exercício:

1. Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.

```javascript
db.products.aggregate(
  {
    $project: {
      preco: { $divide: ["$sale_price", 2] }
    }
  }
);
```

## Para fixar - $addFields

Utilizando o banco de dados **storage**, faça o seguinte exercício:

1. Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

```javascript
db.products.aggregate(
  {
    $addFields: {
      totalEmEstoque: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  },
  {
    $group: {
      _id: null,
      totalEmEstoque: { $sum: "$totalEmEstoque" }
    }
  },
  { $project: { _id: 0 } }
);
```

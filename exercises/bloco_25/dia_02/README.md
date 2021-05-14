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

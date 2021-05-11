# Atividades

## Para fixar - $limit

Utilizando o banco de dados agg_example, faça os seguintes exercícios:

1. Selecione todas as transações feitas pelo cliente chamado "Dave America";

```javascript
db.transactions.aggregate({ $match: { from: "Dave America" } });
```

2. Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";

```javascript
db.transactions.aggregate({
  $match: {
    $or: [
      { value: { $gte: 700, $lte: 6000 } },
      { from: "Lisa Simpson" }
    ]
  }
});
```

3. Selecione três transações com o valor acima de 1000.

```javascript
db.transactions.aggregate([
  { $match: { value: { $gte: 1000 } } },
  { $limit: 3 }
]);
```

## Para fixar - $group

Utilizando o banco de dados **agg_example**, faça os exercícios:

1. Selecione todos os bancos;

```javascript
db.transactions.aggregate();
```

2. Selecione o valor total das transações em cada banco e quantas são;

```javascript
db.transactions.aggregate({
  $group: {
    _id: "$bank",
    totalValue: { $sum: "$value" },
    count: { $sum: 1 }
  }
});
```

3. Selecione o valor total de transações;

```javascript
db.transactions.aggregate({ $group: { _id: null, totalValue: { $sum: "$value" } } });
```

4. Selecione os bancos que têm o valor total de transações maior que 1000.

```javascript
db.transactions.aggregate(
  { $group: { _id: '$bank', totalValue: { $sum: "$value" } } },
  { $match: { totalValue: { $gt: 1000 } } }
);
```

## Para fixar - $lookup

Utilizando o banco de dados **agg_example**, adicione a seguinte collection e faça os exercícios:

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
      localField: "name",
      foreignField: "from",
      as: "client_transactions"
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
      localField: "name",
      foreignField: "to",
      as: "received_transactions"
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
      localField: "name",
      foreignField: "to",
      as: "received_transactions"
    }
  }
);
```

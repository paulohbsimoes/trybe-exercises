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

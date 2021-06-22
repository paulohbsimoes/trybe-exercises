# Atividades

## Para fixar - $limit

Utilizando o banco de dados agg_example, faça os seguintes exercícios:

**1.** Selecione todas as transações feitas pelo cliente chamado "Dave America";

```javascript
db.transactions.aggregate({ $match: { from: "Dave America" } });
```

**2.** Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";

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

**3.** Selecione três transações com o valor acima de 1000.

```javascript
db.transactions.aggregate([
  { $match: { value: { $gte: 1000 } } },
  { $limit: 3 }
]);
```

## Para fixar - $group

Utilizando o banco de dados **agg_example**, faça os exercícios:

**1.** Selecione todos os bancos;

```javascript
db.transactions.aggregate();
```

**2.** Selecione o valor total das transações em cada banco e quantas são;

```javascript
db.transactions.aggregate({
  $group: {
    _id: "$bank",
    totalValue: { $sum: "$value" },
    count: { $sum: 1 }
  }
});
```

**3.** Selecione o valor total de transações;

```javascript
db.transactions.aggregate({ $group: { _id: null, totalValue: { $sum: "$value" } } });
```

**4.** Selecione os bancos que têm o valor total de transações maior que 1000.

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

**1.** Selecione todos os clientes com as suas respectivas transações feitas;

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

**2.** Selecione quatro clientes com as suas respectivas transações recebidas;

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

**3.** Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

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
## Agora, a prática

Para esta etapa, utilizaremos um dataset que contém três coleções: **clientes**, **produtos** e **vendas**. Utilize os comandos abaixo para importar essas coleções para o banco **erp**:

1. Faça o download dos arquivos **json**, clicando com o botão direito e escolhando a opção "Salvar como":

* [clientes](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/clientes-b41ac10693375ca85847468d9071f788.json)

* [produtos](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/produtos-0a039404ac00200fe4a948986caf26c2.json)

* [vendas](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/vendas-3e516ade3d00b07e1163e9be4e81bf37.json)

2. Faça a importação para sua instância do MongoDB:

```bash
mongoimport --db erp <caminho_do_arquivo_clientes.json>
mongoimport --db erp <caminho_do_arquivo_produtos.json>
mongoimport --db erp <caminho_do_arquivo_vendas.json>
```

3. Conecte-se à sua instância e confira o número de documentos em cada coleção:

```javascript
use erp;
db.clientes.count(); // 499
db.produtos.count(); // 499
db.vendas.count(); // 4900
```

Com o dataset importado, é hora de colocar a mão na massa!

O MongoDb possui diversas ferramentas, como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

**Exercício 1:** Utilizando o estágio **$match**, escreva uma agregação para retornar somente os clientes do sexo **"MASCULINO"**.

```javascript
db.clientes.aggregate({ $match: { sexo: "MASCULINO" } });
```

**Exercício 2:** Utilizando o estágio **$match**, escreva uma agregação para retornar somente os clientes do sexo **"FEMININO"** e com data de nascimento entre os anos de **1995** e **2005**.

```javascript
db.clientes.aggregate({
  $match: {
    sexo: "FEMININO",
    dataNascimento: {
      $gte: new Date("1995-01-01"),
      $lte: new Date("2005-12-31")
    }
  }
});
```

**Exercício 3:** Utilizando o estágio **$match**, escreva uma agregação para retornar somente os clientes do sexo **"FEMININO"** e com data de nascimento entre os anos de **1995** e **2005**, limitando a quantidade de documentos retornados em **5**.

```javascript
db.clientes.aggregate(
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: new Date("1995-01-01"),
        $lte: new Date("2005-12-31")
      }
    },
  },
  { $limit: 5 }
);
```

**Exercício 4:** Conte quantos clientes do estado **SC** existem na coleção. Retorne um documento em que o campo **_id** contenha a UF e outro campo com o total.

```javascript
db.clientes.aggregate(
  { $match: { "endereco.uf": "SC" } },
  { $group: { _id: "$endereco.uf", total: { $sum: 1 } } }
);
```

**Exercício 5:** Agrupe os clientes por **sexo**. Retorne o total de clientes de cada sexo no campo **total**.

```javascript
db.clientes.aggregate(
  { $group: { _id: "$sexo", total: { $sum: 1 } } }
);
```

**Exercício 6:** Agrupe os clientes por **sexo** e **uf**. Retorne o total de clientes de cada sexo no campo **total**.

```javascript
db.clientes.aggregate(
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } }
);
```

**Exercício 7:** Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

```javascript
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
```

**Resposta:**

```javascript
db.clientes.aggregate(
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } },
  { $project: { _id: 0, estado: "$_id.uf", sexo: "$_id.sexo", total: 1 } }
);
```

**Exercício 8:** Descubra quais são os **5** clientes que gastaram o maior valor.

```javascript
db.vendas.aggregate([
  { $match: { status: { $in: ['ENTREGUE', 'EM SEPARACAO'] } } },
  { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal" } } },
  { $sort: { valorTotal: -1 } },
  { $limit: 5 },
]);
```

**Exercício 9:** Descubra quais são os **10** clientes que gastaram o maior valor no ano de **2019**.

```javascript
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: new Date("2019-01-01"), $lte: new Date("2019-12-31") } } },
  { $group: { _id: "$clienteId", valorTotal: { $sum: "$valorTotal" } } },
  { $sort: { valorTotal: -1 } },
  { $limit: 10 }
]);
```

**Exercício 10:** Descubra quantos clientes compraram mais de **5** vezes. Retorne um documento que contenha somente o campo **clientes** com o total de clientes.

**Dica:** O operador [$count](https://docs.mongodb.com/manual/reference/operator/aggregation/count/#pipe._S_count) pode simplificar sua query.

```javascript
db.vendas.aggregate([
  { $group: { _id: "$clienteId", count: { $sum: 1 } } },
  { $match: { count: { $gt: 5 } } },
  { $count: "clientes" }
]);
```

**Exercício 11:** Descubra quantos clientes compraram menos de **três** vezes entre os meses de **Janeiro de 2020** e **Março de 2020**.

```javascript
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-03-31") } } },
  { $group: { _id: "$clienteId", numeroDeCompras: { $sum: 1 } } },
  { $match: { numeroDeCompras: { $lt: 3 } } },
  { $count: "clientes" }
]);
```

**Exercício 12:** Descubra quais as **três ufs** que mais compraram no ano de **2020**. Retorne os documentos no seguinte formato:

```javascript
{
  "totalVendas": 10,
  "uf": "SP"
}
```

**Resposta:**

```javascript
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") } } },
  { 
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente"
    }
  },
  { $group: { _id: "$cliente.endereco.uf", vendas: { $sum: 1 } } },
  { $sort: { vendas: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, totalVendas: "$vendas", uf: { $arrayElemAt: ["$_id", 0] } } }
]);
```

**Exercício 13:** Encontre qual foi o total de vendas e a média de vendas de cada **uf** no ano de **2019**. Ordene os resultados pelo nome da **uf**. Retorne os documentos no seguinte formato:

```javascript
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}
```

**Resposta:**

```javascript
db.vendas.aggregate(
  { 
    $match: {
      dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") }
    }
  },
  { 
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente"
    }
  },
  { $unwind: "$cliente" },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 },
    }
  },
  { $sort: { _id: 1 } }
);
```

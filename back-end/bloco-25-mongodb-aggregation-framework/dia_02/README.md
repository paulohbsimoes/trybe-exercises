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

## Exercícios

O MongoDb possui diversas ferramentas, como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

Você continuará utilizando o banco de dados **erp** do dia anterior. Nos exercícios **1** a **8**, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios. Vamos lá?

**Exercício 1**: Utilize uma combinação das expressões aritméticas e adicione um campo chamado **idade** à coleção **clientes**. Algumas dicas:

* arredonde para baixo o valor da idade;
* calcule a idade usando a diferença entre a data corrente e a data de nascimento;
* 1 dia é igual a 86400000 milissegundos.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  }
);
```

**Exercício 2**: Utilizando o novo campo **idade**, conte quantos clientes têm entre **18** e **25** anos.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: "clientesEntre18e25Anos" }
);
```

**Exercício 3**: Remova os estágios **$count** e **$match** do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo **compras**.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  }
);
```

**Exercício 4**: Selecione TODOS os clientes que compraram entre **Junho de 2019** e **Março de 2020**.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new Date("2019-06-01"),
        $lte: new Date("2020-03-31")
      }
    }
  }
);
```

**Exercício 5**: Confira o número de documentos retornados pelo pipeline com o método **itcount()**. Até aqui, você deve ter **486** documentos sendo retornados.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new Date("2019-06-01"),
        $lte: new Date("2020-03-31")
      }
    }
  }
).itcount();
```

**Exercício 6**: Deixe apenas os **top 10** clientes com mais compras nesse período.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new Date("2019-06-01"),
        $lte: new Date("2020-03-31")
      }
    }
  },
  {
    $addFields: {
      numeroDeCompras: {
        $size: "$compras"
      }
    }
  },
  { $sort: { numeroDeCompras: -1 } },
  { $limit: 10 }
);
```

**Exercício 7**: Para esses clientes, adicione um campo chamado **compras.valorComDesconto** em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra ( **valorTotal** ).

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new Date("2019-06-01"),
        $lte: new Date("2020-03-31")
      }
    }
  },
  {
    $addFields: {
      numeroDeCompras: {
        $size: "$compras"
      }
    }
  },
  { $sort: { numeroDeCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  { 
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: ["$compras.valorTotal", 0.9]
      }
    }
  }
);
```

**Exercício 8**: Ainda nesse pipeline, descubra os **5** estados com mais compras.

```javascript
const ANO = 365 * 24 * 60 * 60 * 1000;
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            ANO
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { clienteId: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$clienteId", "$$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new Date("2019-06-01"),
        $lte: new Date("2020-03-31")
      }
    }
  },
  {
    $addFields: {
      numeroDeCompras: {
        $size: "$compras"
      }
    }
  },
  { $sort: { numeroDeCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: ["$compras.valorTotal", 0.9]
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      numeroDeCompras: { $sum: 1 }
    }
  },
  { $sort: { numeroDeCompras: -1 } },
  { $limit: 5 }
]);
```

**Exercício 9**: Descubra o cliente que mais consumiu **QUEIJO PRATO**. Retorne um documento com a seguinte estrutura:

```javascript
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
```

**Resposta:**

```javascript
db.vendas.aggregate(
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $group: {
      _id: "$clienteId",
      quantidade: { $sum: "$itens.quantidade" }
    }
  },
  { $sort: { quantidade: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "clientes",
      localField: "_id",
      foreignField: "clienteId",
      as: "cliente"
    }
  },
  {
    $project: {
      _id: 0,
      nomeDoCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$quantidade"
    }
  }
);
```

**Exercício 10**: Selecione todas as vendas do mês de **Março de 2020**, com **status EM SEPARACAO**. Acrescente um campo chamado **dataEntregaPrevista** com valor igual a três dias após a data da venda. Retorne apenas os campos **clienteId**, **dataVenda** e **dataEntregaPrevista**.

```javascript
db.vendas.aggregate(
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31"),
      },
      status: "EM SEPARACAO"
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60 * 1000 ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
);
```

## Bônus

**Exercício 11**: Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 10.

```javascript
const DIA = 24 * 60 * 60 * 1000;
db.vendas.aggregate(
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31"),
      },
      status: "EM SEPARACAO"
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60 * 1000 ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1,
    }
  },
  {
    $group: {
      _id: null,
      primeiraEntrega: { $min: "$dataEntregaPrevista" },
      ultimaEntrega: { $max: "$dataEntregaPrevista" },
    }
  },
  {
    $project: {
      _id: 0,
      diferencaEmDias: {
        $ceil: {
          $divide: [
            {
              $abs: {
                $subtract: ["$primeiraEntrega", "$ultimaEntrega"]
              }
            },
            DIA
          ]
        }
      }
    }
  }
);
```


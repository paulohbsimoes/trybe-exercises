## Agora, a prática

Vamos colocar em prática todo o conteúdo que vimos. Para isso, faremos alguns exercícios práticos utilizando os principais recursos do PM2.

**1 -** Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:

* Crie **UM** processo no PM2 utilizando o CLI;

```
pm2 start index.js --name app
```

* Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
Pare o processo;

```
pm2 restart app
pm2 reload app
```

* **(Bônus)** - Escalone para **mais 5** processos;

```
pm2 scale app +5
```

* **(Bônus)** - Defina para **3** a quantidade de processos;

```
pm2 scale app 3
```

* Remova o processo da listagem do **PM2**;

```
pm2 delete app
```

**2 -** Crie um arquivo **ecosystem**. O arquivo configurará o PM2 para:

* Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;

* Ativar o modo cluster e configurar a quantidade de processos rodando para o máximo possível;

* Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.

**Resultado:**

```yml
# ecosystem.config.yml
apps:
  - name: "app"
    script: "index.js"
    exec_mode: "cluster"
    instances: "max"
    max_memory_restart: "100M"
```

**3 -** Explorando variáveis de ambiente:

* Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;

* Adicione ao arquivo **ecosystem** do exercício anterior dois contextos de variáveis: **env_prod** e **env_homolog**.

* Execute o processo utilizando o contexto **prod**. Em seguida, execute o processo utilizando o contexto **homolog**. Valide se o comportamento foi alterado.

**Resultado:**

```yml
# ecosystem.config.yml
apps:
  - name: "app"
    script: "index.js"
    exec_mode: "cluster"
    instances: "max"
    watch: true
    max_memory_restart: "100M"
    env_prod:
      ENVIRONMENT: 'PROD'
    env_homolog:
      ENVIRONMENT: 'HOMOLOG'
```

**4 -** Adicione monitoramento à sua API:

* Crie uma conta no PM2;

* Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;

* Verifique se o dashboard web está exibindo as informações de sua API.

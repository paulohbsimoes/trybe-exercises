# Agora, a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, vamos fazer o processo de deploy.

**1 -** Crie uma API simples no node utilizando express. No arquivo **index.js**, crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no **Heroku** utilizando o CLI.

```
npm init -y
git init
echo 'node_modules' > .gitignore
npm install express
Adicionar script start no package.json
Criar o arquivo index.js e escrever o código necessário
git add -A
git commit -m "Mensagem do commit"
heroku create nomeDoApp
git push heroku master
```

**2 -** Agora, modifique a API para responder a uma nova mensagem:

* Crie uma nova variável de ambiente com um texto qualquer;

* Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.

```
Para criar variáveis de ambiente usamos o seguinte comando
heroku config:set NOME_DA_VARIAVEL=CONTEUDO_DA_VARIAVEL -a nomeDoApp
```

**3 -** Agora vamos criar um Procfile.

* Crie uma cópia do arquivo **index.js** com o nome **indexProcfile.js**;

* No novo arquivo, altere a mensagem de resposta da API para **"Procfile funciona mesmo!"**;

* Crie um **Procfile** para iniciar sua aplicação a partir do novo arquivo de **indexProcfile.js**.

```
web: node indexProcfile.js
```

**4 -** Simule o deploy em multiambientes (produção e homologação). Para isso:

* Renomeie o remote do deploy dos exercícios anteriores para **homolog**;

* Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar **prod**;

* Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.

```
git remote rename heroku homolog
heroku create -a appDeProducao --remote prod
git push prod master
git config:set ENVIRONMENT=Production -a appDeProducao
git config:set ENVIRONMENT=Homolog -a nomeDoApp
```

**5 -** Faça deploy de uma aplicação React.

* Crie uma aplicação React utilizando **create-react-app**;

* Crie um novo app utilizando o buildpack [mars/create-react-app](https://github.com/mars/create-react-app-buildpack#quick-start);

* Então, faça o deploy do app no Heroku.

```
npx create-react-app hello-heroku-react
cd hello-heroku-react
heroku create nomeDoApp -b mars/create-react-app
Altera mensagem no arquivo da página principal
git add -A
git commit -m "Mensagem do commit"
git push heroku master
heroku open
```

## Bônus

**6 -** Agora que você chegou até aqui, pegue os projetos que você criou anteriormente e faça deploy deles no Heroku! Compartilhe suas URLs com a turma para que as pessoas possam acessá-los de outros lugares.

**7 -** Simule a estratégia de se terem multiambientes utilizando variáveis de ambiente específicas. Para isso:

* Crie outros ambientes a partir dos códigos dos exercícios anteriores;

* Faça alterações para que os projetos se comportem de maneiras diferentes em ambientes diferentes, de acordo com uma variável de ambiente. Pode ser uma mensagem diferente, ou um comportamento alterado, por exemplo;

* Teste seus apps acessando cada um dos ambientes.

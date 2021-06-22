# Prática

## Para fixar

Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:

1. Crie um novo projeto utilizando `npx create-react-app nome-app`

* **⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️**

2. Na pasta `src`, acesse `App.js` e remova todo o seu conteúdo do função `App`, de modo que ela fique assim:

```javascript
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return ();
    }

    export default App;
```

3. Na pasta **src**, crie um arquivo chamado **Component.js** crie um componente que retorne um `<h1>` com o seu nome um paragráfo, `<p>`, com uma breve descrição sobre você.

* Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>`.

4. Importe seu componente em **App.js** de modo que ele seja renderizado na tela quando a aplicação for iniciada, `npm start`.

Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo **Component.js** deverá ficar da seguinte forma:

```javascript
export default Component;
```

5. Execute sua aplicação, `npm start`, e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns 🎉

## Exercícios

1. Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta `nome-app`

* **⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️**

2. Crie uma lista de tarefas simples seguindo os passos abaixo:

* Insira a função a seguir acima do seu **App** :

```javascript
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

* Agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.

* Por fim, crie uma array de compromissos e use a função `map` para que cada item do array apareça, como um item de lista, no seu componente `App`.

3. Acesse [este link](https://www.freecodecamp.org/learn/front-end-libraries/react) e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition"

4. **Bônus:** Por último, entenda como funciona o código [deste link](https://codepen.io/nathansebhastian/pen/qgOJKe). Adicione mais dois `cards` com descrição e link a sua escolha.

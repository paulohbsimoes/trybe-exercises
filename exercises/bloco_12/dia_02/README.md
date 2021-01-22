# Prática

## Para fixar

### Componentes controlados

1. Crie um formulário com um campo **select**, dois **inputs** de tipo diferente, uma **textarea** e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

2. Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.

### Event Handlers Genéricos

3. Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um *event handler* genérico para lidar com eles.

4. Acrescente no seu formulário um **input** do tipo **checkbox** e garanta que seu **event handler** esteja tratando este caso corretamente.

5. Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um **input** para **arquivos**. Acrescente um ao seu formulário.

6. Encapsule alguns dos seus campos num **fieldset**. Entenda como ele funciona lendo uma [documentação](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset).

### Transmitindo informações de componente filho para componente pai

7. Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

8. Faça duas validações em um desses componentes filhos e uma em um outro.

9. Crie, no estado do componente pai, um campo **formularioComErros** que deve ser **true** caso algum desses componentes tenha erros e **false** caso contrário.

🦜 **Dica:** Se algum dos componentes transmitir **true** para a função que fará o **handle** dos erros, qual valor deve ser armazenado no Estado ?

## Exercícios

### Criando um formulário em React

Lembra do formulário que você criou usando JavaScript "clássico" ? Vamos criar um parecido em React, e você verá como suas habilidades evoluíram desde então!

* Crie um novo projeto, utilizando `npx create-react-app my-form-2.0`

* Caso julgue necessário, crie estilos **CSS** para seu formulário, de acordo com a sua imaginação.

* Faça tudo utilizando as abstrações do **React**.

Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:

1. Crie um `<fieldset>` para os dados pessoais a seguir:

* Nome - Texto
  * Limite de 40 caracteres
  * Todos os caracteres devem ser transformados para **UPPER CASE** assim que forem digitados.
  * Campo obrigatório

* Email - Texto
  * Limite de 50 caracteres
  * Campo obrigatório

* CPF - Texto
  * Limite de 11 caracteres
  * Campo obrigatório

* Endereço - Texto
  * Limite de 200 caracteres
  * Remover qualquer caracter especial que seja digitado
  * Campo obrigatório

* Cidade - Texto
  * Limite de 28 caracteres
  * Ao remover o foco desse campo (evento **onBlur**), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
  * Campo obrigatório.

* Estado - ComboBox
  * Todos os estados do Brasil
  * Campo obrigatório.

* Tipo - Radio Button
  * Casa, Apartamento
  * Campo obrigatório.

2. Crie outro `<fieldset>` para dados do seu último emprego:

* Resumo do currículo - TextArea
  * Limite de 1000 caracteres
  * Campo obrigatório.

* Cargo - TextArea
  * Limite de 40 caracteres
  * Quando o mouse passar por cima deste campo (evento **onMouseEnter** ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
  * Campo obrigatório

* Descrição do cargo - Texto
  * Limite de 500 caracteres
  * Campo obrigatório

3. Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

4. Crie um botão **Limpar** que limpa todos os campos do formulário e a `<div>` com seu currículo também.

Por último, vá até o formulário que você criou na aula **HTML & CSS - Forms** e veja as diferenças no código.

## Bônus

* Utilize [regex](https://www.regextester.com/100026) para validar o campo email.

  * O formato esperado é: **trybe@gmail.com**.

  * **Dica: Para estudar como o regex funciona, utilize o [link](https://regexone.com/)**.

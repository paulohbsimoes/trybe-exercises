### COMEÇANDO OS EXERCÍCIOS

Vamos criar uma aplicação simples que faz chamadas a uma [API de piadas sobre o Chuck Norris](https://api.chucknorris.io/). A aplicação terá 2 "partes". Uma que mostra as categorias das piadas e direciona a pessoa para a segunda parte, onde a chamada da API de piadas é feita e a piada é de fato retornada. Então, vamos lá ?

#### Parte 1

Vamos começar fazendo a parte das categorias. Para essa parte já criamos a view para você!

- Primeiro crie uma pasta models e nela crie um model para as categorias. Nele deve haver uma função que faz uma chamada a API de categorias.

- Agora, vamos criar o controller. Lembre-se que o controller tem como uma de suas funções unificar o model com nossa view.
Importe o model das categorias e use a função criada anteriormente para obter uma lista de categorias. Depois, utilize o `res.render` para renderizar a view de categorias e passar a variável categories para ela. A view se encontra na pasta `views/categories`.

- Agora, no nosso arquivo `index.js` vamos usar o controller que acabamos de criar. Ele deve estar ligado ao endpoint `/categories`. Não se esqueça de usar o express para realizar e o ejs como template engine.

- Para finalizar, vamos criar mais uma função no controller de categorias. Queremos que ao acessar o endpoint '/', o usuário seja levado para o endpoint '/categories', crie uma função que faça esse redirecionamento.
**DICA:** Olhe a função `res.redirect()` na documentação do express.

---

#### Parte 2

Agora vamos as piadas em si. Essa etapa será um pouco menos descritiva e dessa vez você terá que fazer as 3 partes do modelo MVC: a view, o controller e o model.

- O model das piadas deve fazer chamadas para o endpoint de piada aleatório e para o endpoint de piada por categoria.

- A view deve conter pelo menos 2 campos, um botão para voltar para a página de categorias e um campo onde vai exibir a piada retornada pela API

- O endpoint `/jokes` deve retornar uma piada aleatória sem categoria específica (o que corresponde ao link da categoria all) e os endpoints `/jokes/:categories` deve exibir uma piada de uma categoria específica, que vem como parêmetro da URL.

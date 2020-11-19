# Práticas

## Parte I

Para começar mergulhando de cabeça, assista a este vídeo onde o autor demonstra como utilizar o media query para alterar o layout da página de acordo com a sua largura:

Obs: não se preocupe em reproduzir o código demonstrado no vídeo, faremos isso logo em seguida!

[Como utilizar Media Queries para sites Responsivos](https://www.youtube.com/watch?v=AltqAPZzAqo)

Vamos praticar um pouco!

Para realizar as tarefas a seguir use [esse template do W3Schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_minmax).

* Altere o código para que a div amarela fique com a cor "azul" quando a largura da página estiver entre 900px e 1100px;

* Altere o código para que a div amarela fique com a cor "vermelha" quando a largura da página for até 600px;

* Crie uma outra div idêntica a existente e faça com que ela seja mostrada ao lado da div amarela quando a largura da página for maior que 1500px;

  * Dica: use Flexbox

* Faça com que a segunda div desapareça quando a largura da tela estiver entre 600px e 900px;

* Faça com que a primeira div desapareça quando a largura da tela for até 600px.

## Parte II

Antes de seguir para o próximo vídeo, prepare um arquivo index-p1.html e um arquivo style-p1.css para que você possa ir reproduzindo o código que o autor irá fazer!

Agora o exercício é fazer junto com o vídeo! 🤓

* Algumas dicas:
  
  * Você vai perceber que o autor não se preocupou em organizar o CSS da melhor forma. Como você pode melhorar o código dele? (indentação)

[Layout Responsivo com CSS, HTML e Media Screen](https://www.youtube.com/watch?v=cSOcSmC39zo)

O autor do vídeo usa uma má prática (anti-pattern) enquanto está desenvolvendo o código. Consegue descobrir qual é?

* Corrija o erro no código do autor do vídeo para que o CSS seja aplicado de uma forma melhor;

* Dica: tem a ver com o uso de id e class para referenciar elementos HTML no CSS.
Bônus: altere o código para que os elementos sejam alinhados usando Flexbox.

## Parte III

Neste outro vídeo, o autor mostra uma outra forma de você aplicar media queries.

Antes de seguir para o vídeo, prepare um arquivo index-p2.html e um arquivo style-p2.css para que você possa ir reproduzindo o código que o autor irá fazer!

Mais uma vez, faça junto com o autor do vídeo para que você possa ver na prática como aplicar media queries.

[Tutorial de CSS: Usando media query para responsive CSS](https://www.youtube.com/watch?v=KAxbHLgybnY&ab_channel=CodeAM)

Agora vamos praticar mais!

* Altere o código do exercício anterior (index-p1.html e style-p1.css) para que o CSS específico da media query seja carregado a partir de um outro arquivo, por exemplo style-mobile-p1.css;

* Ainda no código do exercício anterior, altere as cores de cada um dos elementos da página para uma escala de cinza quando a orientação da página mudar para a horizontal (landscape);

# Exercícios

## Parte I - Criar uma página para uma tela pequena

Antes de começar, copie o template HTML e CSS abaixo, e salve em seus respectivos arquivos:

* exercise1.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Media Query Exercise 1</title>

  <link rel="stylesheet" href="exercise1.css" />
</head>

<body>

  <h1>Media Query Demo</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore
    beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.</p>

  <h2>Box Columns</h2>

  <figure>
    <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

</body>

</html>
```

* exercise1.css

```css
body {

}
h1 {

}
h2 {

}

img {
    max-width: 100%;
}

figure {
    margin: 0;
}
```

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso, veja no detalhe nos Recursos adicionais ).

Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:

* Faça o tamanho da fonte ser maior;

* Faça o tamanho da fonte dos elementos h1 ser menor;

* Aumente o espaçamento entre as figuras;

* Adicione um pouco de margin na página.

> Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do mobile first. Fazendo isso, começamos com um design básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.

> Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.

**Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o "Inspecionar elemento". Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensões de largura e altura irão aparecer conforme você redimensiona a tela.**

* Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.

  * Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra...

Realize as seguintes tarefas:

* Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px). Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;

* Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width do teste da media query. Dentro desse breakpoint, adicione os seguintes ajustes:

  * Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);

  * Ajuste o tamanho da fonte;

  * Ajuste as margens da página;

  * Faça as imagens serem mostradas em duas colunas.

Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.

* Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px), e realize os seguintes ajustes dentro do breakpoint:

  * Altere a cor de fundo;

  * Ajuste o tamanho da fonte;

  * Ajuste as margens da página;

  * Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

## Parte II - Criando 3 layouts diferentes utilizando o mobile first

Antes de começar, copie o template HTML e CSS abaixo, e salve em seus respectivos arquivos:

* exercise2.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Media Query Exercise 2</title>

  <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
  <link rel="stylesheet" href="exercise2.css" />
</head>

<body>
  <div class="container">

    <header>
      <p>Alice's Adventures in Wonderland</p>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>

    <aside class="aside-one">
      <h2>Chapters</h2>
      <ul>
        <li>I. Down the Rabbit-Hole</li>
        <li>II. The Pool of Tears</li>
        <li>III. A Caucus-Race and a Long Tale</li>
        <li>IV. The Rabbit Sends in a Little Bill</li>
        <li>V. Advice from a Caterpillar</li>
        <li>VI. Pig and Pepper</li>
        <li>VII. A Mad Tea-Party</li>
        <li>VIII. The Queen's Croquet-Ground</li>
        <li>IX. The Mock Turtle's Story</li>
        <li>X. The Lobster Quadrille</li>
        <li>XI. Who Stole the Tarts?</li>
        <li>XII. Alice's Evidence</li>
      </ul>
    </aside>

    <aside class="aside-two">
      <h2>Information</h2>
      <ul>
        <li>Title: Alice's Adventures in Wonderland</li>

        <li>Author: Lewis Carroll</li>

        <li>Release Date: June 25, 2008 [EBook #11]</li>
        <li>Last Updated: July 14, 2014</li>

        <li>Language: English</li>
      </ul>
    </aside>

    <article class="main-content">
      <h1>
        CHAPTER I. Down the Rabbit-Hole
      </h1>
      <p>
        Alice was beginning to get very tired of sitting by her sister on the
        bank, and of having nothing to do: once or twice she had peeped into the
        book her sister was reading, but it had no pictures or conversations in
        it, 'and what is the use of a book,' thought Alice 'without pictures or
        conversations?'
      </p>
      <p>
        So she was considering in her own mind (as well as she could, for the hot
        day made her feel very sleepy and stupid), whether the pleasure of making
        a daisy-chain would be worth the trouble of getting up and picking the
        daisies, when suddenly a White Rabbit with pink eyes ran close by her.
      </p>
      <p>
        There was nothing so <i>very</i> remarkable in that; nor did Alice think it so
        <i>very</i> much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh
        dear! I shall be late!' (when she thought it over afterwards, it occurred
        to her that she ought to have wondered at this, but at the time it all
        seemed quite natural); but when the Rabbit actually <i>took a watch out of
          its waistcoat-pocket</i>, and looked at it, and then hurried on, Alice started
        to her feet, for it flashed across her mind that she had never before seen
        a rabbit with either a waistcoat-pocket, or a watch to take out of it, and
        burning with curiosity, she ran across the field after it, and fortunately
        was just in time to see it pop down a large rabbit-hole under the hedge.
      </p>
      <p>
        In another moment down went Alice after it, never once considering how in
        the world she was to get out again.
      </p>
      <p>
        The rabbit-hole went straight on like a tunnel for some way, and then
        dipped suddenly down, so suddenly that Alice had not a moment to think
        about stopping herself before she found herself falling down a very deep
        well.
      </p>
      <p>
        Either the well was very deep, or she fell very slowly, for she had plenty
        of time as she went down to look about her and to wonder what was going to
        happen next. First, she tried to look down and make out what she was
        coming to, but it was too dark to see anything; then she looked at the
        sides of the well, and noticed that they were filled with cupboards and
        book-shelves; here and there she saw maps and pictures hung upon pegs. She
        took down a jar from one of the shelves as she passed; it was labelled
        'ORANGE MARMALADE', but to her great disappointment it was empty: she did
        not like to drop the jar for fear of killing somebody, so managed to put
        it into one of the cupboards as she fell past it.
      </p>
      <p>
        'Well!' thought Alice to herself, 'after such a fall as this, I shall
        think nothing of tumbling down stairs! How brave they'll all think me at
        home! Why, I wouldn't say anything about it, even if I fell off the top of
        the house!' (Which was very likely true.)
      </p>
      <p>
        Down, down, down. Would the fall <i>never</i> come to an end! 'I wonder how many
        miles I've fallen by this time?' she said aloud. 'I must be getting
        somewhere near the centre of the earth. Let me see: that would be four
        thousand miles down, I think&mdash;' (for, you see, Alice had learnt
        several things of this sort in her lessons in the schoolroom, and though
        this was not a <i>very</i> good opportunity for showing off her knowledge, as
        there was no one to listen to her, still it was good practice to say it
        over) '&mdash;yes, that's about the right distance&mdash;but then I wonder
        what Latitude or Longitude I've got to?' (Alice had no idea what Latitude
        was, or Longitude either, but thought they were nice grand words to say.)
      </p>
      <p>
        Presently she began again. 'I wonder if I shall fall right <i>through</i> the
        earth! How funny it'll seem to come out among the people that walk with
        their heads downward! The Antipathies, I think&mdash;' (she was rather
        glad there <i>was</i> no one listening, this time, as it didn't sound at all the
        right word) '&mdash;but I shall have to ask them what the name of the
        country is, you know. Please, Ma'am, is this New Zealand or Australia?'
        (and she tried to curtsey as she spoke&mdash;fancy <i>curtseying</i> as you're
        falling through the air! Do you think you could manage it?) 'And what an
        ignorant little girl she'll think me for asking! No, it'll never do to
        ask: perhaps I shall see it written up somewhere.'
      </p>
      <p>
        Down, down, down. There was nothing else to do, so Alice soon began
        talking again. 'Dinah'll miss me very much to-night, I should think!'
        (Dinah was the cat.) 'I hope they'll remember her saucer of milk at
        tea-time. Dinah my dear! I wish you were down here with me! There are no
        mice in the air, I'm afraid, but you might catch a bat, and that's very
        like a mouse, you know. But do cats eat bats, I wonder?' And here Alice
        began to get rather sleepy, and went on saying to herself, in a dreamy
        sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, 'Do bats
        eat cats?' for, you see, as she couldn't answer either question, it didn't
        much matter which way she put it. She felt that she was dozing off, and
        had just begun to dream that she was walking hand in hand with Dinah, and
        saying to her very earnestly, 'Now, Dinah, tell me the truth: did you ever
        eat a bat?' when suddenly, thump! thump! down she came upon a heap of
        sticks and dry leaves, and the fall was over.
      </p>
      <p>
        Alice was not a bit hurt, and she jumped up on to her feet in a moment:
        she looked up, but it was all dark overhead; before her was another long
        passage, and the White Rabbit was still in sight, hurrying down it. There
        was not a moment to be lost: away went Alice like the wind, and was just
        in time to hear it say, as it turned a corner, 'Oh my ears and whiskers,
        how late it's getting!' She was close behind it when she turned the
        corner, but the Rabbit was no longer to be seen: she found herself in a
        long, low hall, which was lit up by a row of lamps hanging from the roof.
      </p>
      <p>
        There were doors all round the hall, but they were all locked; and when
        Alice had been all the way down one side and up the other, trying every
        door, she walked sadly down the middle, wondering how she was ever to get
        out again.
      </p>
      <p>
        Suddenly she came upon a little three-legged table, all made of solid
        glass; there was nothing on it except a tiny golden key, and Alice's first
        thought was that it might belong to one of the doors of the hall; but,
        alas! either the locks were too large, or the key was too small, but at
        any rate it would not open any of them. However, on the second time round,
        she came upon a low curtain she had not noticed before, and behind it was
        a little door about fifteen inches high: she tried the little golden key
        in the lock, and to her great delight it fitted!
      </p>
      <p>
        Alice opened the door and found that it led into a small passage, not much
        larger than a rat-hole: she knelt down and looked along the passage into
        the loveliest garden you ever saw. How she longed to get out of that dark
        hall, and wander about among those beds of bright flowers and those cool
        fountains, but she could not even get her head through the doorway; 'and
        even if my head would go through,' thought poor Alice, 'it would be of
        very little use without my shoulders. Oh, how I wish I could shut up like
        a telescope! I think I could, if I only knew how to begin.' For, you see,
        so many out-of-the-way things had happened lately, that Alice had begun to
        think that very few things indeed were really impossible.
      </p>
      <p>
        There seemed to be no use in waiting by the little door, so she went back
        to the table, half hoping she might find another key on it, or at any rate
        a book of rules for shutting people up like telescopes: this time she
        found a little bottle on it, ('which certainly was not here before,' said
        Alice,) and round the neck of the bottle was a paper label, with the words
        'DRINK ME' beautifully printed on it in large letters.
      </p>
      <p>
        It was all very well to say 'Drink me,' but the wise little Alice was not
        going to do <i>that</i> in a hurry. 'No, I'll look first,' she said, 'and see
        whether it's marked "<i>poison</i>" or not'; for she had read several nice little
        histories about children who had got burnt, and eaten up by wild beasts
        and other unpleasant things, all because they <i>would</i> not remember the
        simple rules their friends had taught them: such as, that a red-hot poker
        will burn you if you hold it too long; and that if you cut your finger
        <i>very</i> deeply with a knife, it usually bleeds; and she had never forgotten
        that, if you drink much from a bottle marked 'poison,' it is almost
        certain to disagree with you, sooner or later.
      </p>
      <p>
        However, this bottle was <i>not</i> marked 'poison,' so Alice ventured to taste
        it, and finding it very nice, (it had, in fact, a sort of mixed flavour of
        cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered
        toast,) she very soon finished it off.
      </p>
    </article>

    <footer>
      <h3>Copyright</h3>
      <p>Project Gutenberg's Alice's Adventures in Wonderland, by Lewis Carroll</p>

      <p>This eBook is for the use of anyone anywhere at no cost and with
        almost no restrictions whatsoever. You may copy it, give it away or
        re-use it under the terms of the Project Gutenberg License included
        with this eBook or online at www.gutenberg.org
      </p>
    </footer>
  </div>

</body>

</html>
```

* exercise2.css

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

>A página acima é uma versão sem estilização do primeiro capítulo do livro: Alice no País das Maravilhas.

* Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande).
 
  * Faça pelo menos um commit para cada layout;

* Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

  * Onde a lista de capítulos deve estar posicionada?

  * Como a história deve ser mostrada?

  * Como o cabeçalho deve ser posicionado?

  * O que fazer com as informações do autor em cada tamanho de tela?

* Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

## Parte III - Criando layouts para dispositivos móveis e para impressão

Antes de começar, copie o template HTML e CSS abaixo, e salve em seus respectivos arquivos:

* exercise3.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kitten Kare</title>
  <link rel="stylesheet" href="exercise3.css" />
</head>

<body>

  <div id="container">
    <div id="header">
      <h1>
        Kitten Kare
      </h1>
    </div>
    <div id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </div>
    <div id="content-container">
      <div id="content">
        <h2>
          Welcome!
        </h2>
        <img src="http://placebear.com/400/400">
        <p>The domestic cat[1][2] (Felis catus[2] or Felis silvestris catus[4], informally Felis domesticus[6][7]) is a
          small, usually furry, domesticated, carnivorous mammal. It is often called the housecat when kept as an indoor
          pet,[8] or simply the cat when there is no need to distinguish it from other felids and felines. Cats are
          valued by humans for companionship and ability to hunt vermin and household pests. They are primarily
          nocturnal.[9]
        </p>
        <p>Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp
          retractable claws, and teeth adapted to killing small prey. As crepuscular predators, cats use their acute
          hearing and ability to see in near darkness to locate prey. Not only can cats hear sounds too faint for human
          ears, they can also hear sounds higher in frequency than humans can perceive. This is because the usual prey
          of cats (particularly rodents such as mice) make high frequency noises, so the hearing of the cat has evolved
          to pinpoint these faint high-pitched sounds. Cats also have a much better sense of smell than humans.
        </p>
        <p>Despite being solitary hunters, cats are a social species, and cat communication includes the use of a
          variety of vocalizations (meowing, purring, trilling, hissing, growling and grunting) as well as pheromones
          and types of cat-specific body language.[10]
        </p>
      </div>
      <div id="aside">
        <h3>
          Cat Body Types
        </h3>
        <ul>
          <li>Oriental
          <li>Foreign
          <li>Semi-Foreign
          <li>Semi-Cobby
          <li>Cobby
            </p>
      </div>
      <div id="footer">
        Copyright © Kitten Kare, 2019
      </div>
    </div>
  </div>

</body>

</html>
```

* exercise3.css

```css
#container {
  margin: 0 auto;
  width: 100%;
  background: #fff;
}

#header {
  background: #ccc;
  padding: 20px;
}

#header h1 {
  margin: 0;
}

#navigation {
  float: left;
  width: 100%;
  background: #333;
}

#navigation ul {
  margin: 0;
  padding: 0;
}

#navigation ul li {
  list-style-type: none;
  display: inline;
}

#navigation li a {
  display: block;
  float: left;
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  border-right: 1px solid #fff;
}

#navigation li a:hover {
  background: #383;
}

#content-container {
  float: left;
  width: 100%;
  background: #FFF;
}

#content {
  clear: left;
  float: left;
  width: 60%;
  padding: 20px 0;
  margin: 0 0 0 4%;
  display: inline;
}

#content h2 {
  margin: 0;
}

#aside {
  float: right;
  width: 33%;
  padding: 20px 0;
  margin: 0 3% 0 0;
  display: inline;
}

#aside h3 {
  margin: 0;
}

#footer {
  clear: left;
  background: #ccc;
  text-align: right;
  padding: 20px;
  height: 1%;
}
```

O objetivo deste exercício é usar media queries para fazer a página acima parecer diferente na hora da impressão e em diferentes tamanhos de tela.

  * Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:

    * Os elementos com id header, navigation e footer devem desaparecer;
    
    * O elemento com id aside deve ser mostrado abaixo do conteúdo principal.

    ![Urso](./assets/img/1.png)
    * Visualização da página antes da impressão

* Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:

  * O elemento com id aside deve desaparecer;

  * O elemento body não deve ter padding;

  * As imagens não devem exceder a largura da tela;

  * Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;

  * O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo apos o usuário rolar a página.

  ![Tela pequena](./assets/img/2.png)
  * 240x320: tela pequena

  ![Tela smartphone](./assets/img/3.png)
  * 360x640 tela de smartphone

## Bônus (opcional)

O vídeo abaixo mostra como você pode criar layouts responsivos utilizando o framework Bootstrap.

Use-o como referência para realizar o exercício bônus proposto a seguir.

[Bootstrap 4 - Layout responsivo com Bootstrap](https://www.youtube.com/watch?v=n2tuBD2bwIw)

Agora que você já está fera em criar layouts específicos para diferentes tamanhos de tela utilizando a abordagem mobile first, que tal voltar à pagina que você criou na aula de HTML Semântico sobre o camarão louva deus e criar um layout bem bacana para ela ser acessada a partir de telas menores? 🦐🦗🥊

Sugestão:

* Crie um layout específico para telas pequenas (smartphones); 📱

* Crie um layout específico para telas médias (tablets); 📱

* Crie um layout específico para impressão (impressoras, salvar como PDF, etc). 🖨

  * Dica: o Bootstrap não tem uma classe específica para o tipo de media print. Você deve definir a media query no seu arquivo CSS e estilizar conforme achar melhor! 😉
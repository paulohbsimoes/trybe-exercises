# Prática

## Para fixar

```javascript
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
```

Crie uma aplicação React na sua máquina via `create-react-app` com o nome `fixation-exercises-11-2`. Crie um arquivo **Image.js** no diretório **src** do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:

1. Qual o nome do componente declarado acima?

2. Chame o componente **Image** , de forma que seja mostrada [esta imagem](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg), ou o texto **Cute cat staring** , caso a imagem não consiga ser carregada.

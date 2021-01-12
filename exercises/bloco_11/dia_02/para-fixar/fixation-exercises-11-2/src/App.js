import Image from './Image';

function App() {
  const img = {
    source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    alternativeText: 'Cute cat staring'
  }

  // Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.
  return (
    <Image 
      source={img.source}
      alternativeText={img.alternativeText}
    />
  );
}

export default App;

import React from 'react';

import ListImage from './components/ListImage';
import AddDogCard from './components/Cards/AddDogCard';

import styles from './App.module.css';

// const mockFetch = (() => {
//   const imgs = ['https://images.dog.ceo/breeds/terrier-wheaten/n02098105_3136.jpg', 'https://picsum.photos/300/300'];
//   const len = imgs.length;
//   let index = 0;
//   const next = () => {
//     const result = imgs[index];
//     index = (index + 1) % len;
//     return result;
//   }
//   return next;
// })()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      lastDog: null,
      loading: true,
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value })
  }

  componentDidMount() {
    const storageDogs = JSON.parse(localStorage.getItem('dogs')) || [];
    if (storageDogs && storageDogs.length) {
      this.setState({ 
        dogs: storageDogs,
        loading: false,
      });
    }
    this.handleNext();
  }

  shouldComponentUpdate(_, nextState) {
    const { lastDog } = nextState;
    if (lastDog && lastDog.includes('terrier')) {
      this.setState({ lastDog: null }, this.handleNext);
      console.log('TERRIER - não vai atualizar')
      return true;
    }
    return true;
  }

  componentDidUpdate(_, prevState) {
    // Requisito concluído, mas vou deixar comentado porque enche o saco
    // const { lastDog } = this.state;
    // const { lastDog: prevStateLastDog } = prevState;
    // if (lastDog && lastDog !== prevStateLastDog) {
    //   alert(this.getDogRace(lastDog));
    // }
  }

  async handleNext() {
    this.setState(
      { loading: true },
      async () => {
        const { message: dog } = await fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json());
        this.setState({
          lastDog: dog, //mockFetch(),
          loading: false,
        }, this.updateStorage);
      }
    )
  }

  handleAdd() {
    this.setState(({ lastDog, dogs, dogName }) => {
      const newDog = { image: lastDog, dogName };
      return {
        dogs: [...dogs, newDog ],
        dogName: ''
      }
    }, this.handleNext);
  }

  handleClear() {
    this.setState({
      dogs: []
    }, this.updateStorage);
  }

  handleRemove(id) {
    this.setState(({ dogs }) => ({
      dogs: dogs.filter((_, index) => index !== id) 
    }))
  }

  updateStorage() {
    const { dogs } = this.state;
    localStorage.setItem('dogs', JSON.stringify(dogs));
  }

  getDogRace(string) {
    return string.match(/[^/]+(?=\/[.\w\d-]+$)/);
  }

  render() {
    const { lastDog, loading, dogs } = this.state;
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Dog list</h1>
        <div className={ styles['dog-list'] }>
          { dogs.map(({ image, dogName }, index) =>
              <ListImage
                handleRemove={ this.handleRemove }
                id={ index }
                key={ index }
                source={ image }
                alt="Dog"
                dogName={ dogName }
              />) }
          <AddDogCard
            handleAdd={ this.handleAdd }
            handleNext={ this.handleNext }
            handleClear={ this.handleClear }
            source={ lastDog }
            loading={ loading }
            onChange={ this.handleChange }
          />
        </div>
      </>
    );
  }
}

export default App;

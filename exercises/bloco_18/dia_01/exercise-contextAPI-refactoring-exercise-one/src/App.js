import React, { Component } from 'react';
import './App.css';
import CarsContext from './contexts/cars';

import Cars from './Cars';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({ [car]: side });
  }

  render() {
    return (
      <CarsContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;

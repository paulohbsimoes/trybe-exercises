import React, { Component } from 'react';

import TrafficSignalContext from './contexts/trafficSignal';
import CarsContext from './contexts/cars';

import TrafficSignal from './TrafficSignal';
import Cars from './Cars';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      signal: { signalColor: 'red' },
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState(({ cars }) => ({
      cars: {
        ...cars,
        [car]: side
      }
    }))
  }

  changeSignal(color) {
    this.setState({
      signal: { signalColor: color }
    });
  }

  render() {
    return (
      <div className="container">
        <CarsContext.Provider
          value={ { ...this.state.cars, moveCar: this.moveCar } }
        >
          <Cars />
        </CarsContext.Provider>

        <TrafficSignalContext.Provider 
          value={ { ...this.state.signal, changeSignal: this.changeSignal } }
        >
          <TrafficSignal />
        </TrafficSignalContext.Provider>
      </div>
    );
  }
}

export default App;

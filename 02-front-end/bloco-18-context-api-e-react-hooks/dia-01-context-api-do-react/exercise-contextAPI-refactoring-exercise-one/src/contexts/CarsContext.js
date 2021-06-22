import React, { createContext, Component } from 'react';

const CarsContext = createContext();

export const CarsContextConsumer = CarsContext.Consumer;

export class CarsProvider extends Component {
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
    const { moveCar } = this;
    return (
      <CarsContext.Provider value={ { ...this.state, moveCar } }>
        { this.props.children }
      </CarsContext.Provider>
    )
  }
}

export default CarsContext;

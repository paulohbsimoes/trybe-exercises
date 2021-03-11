import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  })
  const [signalColor, setSignalColor] = useState('red');

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  function changeSignal(signalColor) {
    setSignalColor(signalColor);
  };

  const context = {
    cars,
    signalColor,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

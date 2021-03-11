import React, { Component } from 'react';
import { CarsProvider } from './contexts/CarsContext';
import Cars from './Cars';

import './App.css';

class App extends Component {
  render() {
    return (
      <CarsProvider>
        <Cars />
      </CarsProvider>
    );
  }
}

export default App;

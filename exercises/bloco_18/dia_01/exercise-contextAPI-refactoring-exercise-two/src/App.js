import React, { Component } from 'react';
import { TrafficSignalProvider } from './contexts/TrafficSignalContext';
import { CarsProvider } from './contexts/CarsContext';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CarsProvider>
          <Cars />
        </CarsProvider>
        <TrafficSignalProvider>
          <TrafficSignal />
        </TrafficSignalProvider>
      </div>
    );
  }
}

export default App;

import React, { createContext, Component } from 'react';

const TrafficSignalContext = createContext();

export const TrafficSignalConsumer = TrafficSignalContext.Consumer;

export class TrafficSignalProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      signalColor: 'red', 
    }

    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({
      signalColor: color,
    });
  }

  render() {
    const { changeSignal } = this;
    return (
      <TrafficSignalContext.Provider value={ { ...this.state, changeSignal } }>
        { this.props.children }
      </TrafficSignalContext.Provider>
    )
  }
}

export default TrafficSignalContext;

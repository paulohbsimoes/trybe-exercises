import React from 'react';

import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  throw new Error('Invalid color');
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div data-testid="traffic-signal">
      <div className="button-container">
        <button type="button" onClick={ () => changeSignal('red') }>Red</button>
        <button type="button" onClick={ () => changeSignal('yellow') }>Yellow</button>
        <button type="button" onClick={ () => changeSignal('green') }>Green</button>
      </div>
      <img 
        className="signal"
        src={renderSignal(signalColor)}
        alt={`${signalColor} traffic signal`}
        data-testid={`${signalColor}-traffic-signal`}
      />
    </div>
  );
}

const mapStateToProps = ({ signal }) => ({
  signalColor: signal.color,
})

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (value) => dispatch(changeSignal(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);

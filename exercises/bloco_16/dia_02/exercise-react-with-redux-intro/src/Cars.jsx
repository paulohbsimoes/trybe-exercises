import React from 'react';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={ () => moveCar('red', !redCar) }>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={ () => moveCar('blue', !blueCar) }>Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={ () => moveCar('yellow', !yellowCar) }>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cars }) => ({
  redCar: cars.red,
  blueCar: cars.blue,
  yellowCar: cars.yellow,
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

import React from 'react';
import renderWithStore from '../helpers/renderWithStore';
import App from '../App';

const testIds = {
  trafficSignal: 'traffic-signal',
  cars: 'cars',
}

describe('App', () => {
  test('Tem um semáforo na tela', () => {
    const { getByTestId } = renderWithStore(<App />);
    expect(getByTestId(testIds.trafficSignal)).toBeInTheDocument();
  })

  test('Ao abrir o app os carros estão na tela', () => {
    const { getByTestId } = renderWithStore(<App />);
    expect(getByTestId(testIds.cars)).toBeInTheDocument();
  })  
})

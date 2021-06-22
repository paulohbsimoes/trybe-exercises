import React from 'react';
import renderWithStore from '../helpers/renderWithStore';
import userEvent from '@testing-library/user-event';
import TrafficSignal from '../TrafficSignal';
import { changeSignal } from '../redux/actionCreators';

const testIds = {
  redTrafficSignal: 'red-traffic-signal',
  yellowTrafficSignal: 'yellow-traffic-signal',
  greenTrafficSignal: 'green-traffic-signal',
}

test('Deverá ter um botão para cada cor: Red, Yellow e Green', () => {
  const { getByRole } = renderWithStore(<TrafficSignal />);

  const red = getByRole('button', { name: /Red/i });
  expect(red).toBeInTheDocument();

  const yellow = getByRole('button', { name: /Yellow/i });
  expect(yellow).toBeInTheDocument();

  const green = getByRole('button', { name: /Green/i });
  expect(green).toBeInTheDocument();
})

test('Ao clicar no botão red a cor é mudada para vermelho', () => {
  const { getByTestId, getByRole } = renderWithStore(<TrafficSignal />);
  const red = getByRole('button', { name: /Red/i });
  userEvent.click(red);
  expect(getByTestId(testIds.redTrafficSignal)).toBeInTheDocument();
})

test('Ao clicar no botão yellow a cor é mudada para amarelo', () => {
  const { getByTestId, getByRole } = renderWithStore(<TrafficSignal />);
  const yellow = getByRole('button', { name: /Yellow/i });
  userEvent.click(yellow);
  expect(getByTestId(testIds.yellowTrafficSignal)).toBeInTheDocument();
})

test('Ao clicar no botão green a cor é mudada para verde', () => {
  const { getByTestId, getByRole } = renderWithStore(<TrafficSignal />);
  const green = getByRole('button', { name: /Green/i });
  userEvent.click(green);
  expect(getByTestId(testIds.greenTrafficSignal)).toBeInTheDocument();
})

test('Se a função renderSignal for chamada com uma cor inválida será lançado um erro', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => renderWithStore(
      <TrafficSignal />,
      { initialState: { signal : { color: 'invalidColor' } } }
  )).toThrow();
  spy.mockRestore();
})

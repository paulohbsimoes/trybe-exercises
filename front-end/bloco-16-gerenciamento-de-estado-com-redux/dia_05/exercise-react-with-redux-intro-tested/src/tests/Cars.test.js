import React from 'react';
import renderWithStore from '../helpers/renderWithStore';
import Cars from '../Cars';
import userEvent from '@testing-library/user-event';

const testIds = {
  redCarButton: 'move-red-car',
  blueCarButton: 'move-blue-car',
  yellowCarButton: 'move-yellow-car',
}

describe('Cars', () => {
  test('Cada carro deverá ter um botão para movê-lo', () => {
    const { getAllByRole } = renderWithStore(<Cars />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(3);
  })

  test('Ao clicar no botão do carro vermelho ele deverá se mover', () => {
    const { getByTestId, getByAltText } = renderWithStore(<Cars />);
    const redCarButton = getByTestId(testIds.redCarButton);
    const redCarImage = getByAltText(/red car/i);
    expect(redCarImage.className).toBe('car-left');
    userEvent.click(redCarButton);
    expect(redCarImage.className).toBe('car-right');
  })

  test('Ao clicar no botão do carro azul ele deverá se mover', () => {
    const { getByTestId, getByAltText } = renderWithStore(<Cars />);
    const blueCarButton = getByTestId(testIds.blueCarButton);
    const blueCarImage = getByAltText(/blue car/i);
    expect(blueCarImage.className).toBe('car-left');
    userEvent.click(blueCarButton);
    expect(blueCarImage.className).toBe('car-right');
  })

  test('Ao clicar no botão do carro amarelo ele deverá se mover', () => {
    const { getByTestId, getByAltText } = renderWithStore(<Cars />);
    const yellowCarButton = getByTestId(testIds.yellowCarButton);
    const yellowCarImage = getByAltText(/yellow car/i);
    expect(yellowCarImage.className).toBe('car-left');
    userEvent.click(yellowCarButton);
    expect(yellowCarImage.className).toBe('car-right');
  })
})

import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

afterEach(cleanup);

describe("Comportamento de cada casa", () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const {getByTestId, queryAllByTestId} = render(<TicTacToe />);

    expect(queryAllByTestId('cell-image').length).toBe(0);
    fireEvent.click(getByTestId('cell_0'));
    expect(queryAllByTestId('cell-image').length).toBe(1);
    
    fireEvent.click(getByTestId('cell_1'));
    expect(queryAllByTestId('cell-image').length).toBe(2);
  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    const {getByTestId, queryAllByTestId} = render(<TicTacToe />);
    expect(queryAllByTestId('cell-image').length).toBe(0);
    fireEvent.click(getByTestId('cell_0'));
    fireEvent.click(getByTestId('cell_1'));
    expect(queryAllByTestId('cell-image').length).toBe(2);
    const cells = queryAllByTestId('cell-image');
    expect(cells[0].src).not.toBe(cells[1].src);
  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo / O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {
    const {getByTestId, queryAllByTestId} = render(<TicTacToe />);
    expect(queryAllByTestId('cell-image').length).toBe(0);
    fireEvent.click(getByTestId('cell_0'));
    expect(queryAllByTestId('cell-image').length).toBe(1);
    const cellImage = getByTestId('cell-image');
    const src = cellImage.src;
    fireEvent.click(getByTestId('cell_0'));
    expect(cellImage.src).toBe(src);
  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada.", () => {
    const {getByTestId, queryAllByTestId} = render(<TicTacToe />);
    expect(queryAllByTestId('cell-image').length).toBe(0);
    fireEvent.click(getByTestId('cell_0'));
    expect(queryAllByTestId('cell-image').length).toBe(1);
    const cellImage = getByTestId('cell-image');
    const src = cellImage.src;
    fireEvent.click(getByTestId('cell_1'));
    expect(queryAllByTestId('cell-image').length).toBe(2);
    expect(cellImage.src).toBe(src);
  });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const { getByTestId } = render(<TicTacToe />);
    for (let id = 0; id < 9; id += 1) {
      expect(getByTestId(`cell_${id}`)).toBeDefined();
    }
  });

  test('Começar com todos os espaços em branco.', () => {
    const { queryAllByTestId } = render(<TicTacToe />);
    expect(queryAllByTestId('cell-image').length).toBe(0);
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<TicTacToe />);
    expect(queryByText('Fim de jogo')).toBeNull();
  });
});

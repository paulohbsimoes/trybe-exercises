import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

afterEach(cleanup);

const winnerSymbols = ['X', 'O'];

winnerSymbols.map(winnerSymbol => {
  describe(`Condições de vitória para o Jogador ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = cellId => {
      if (cellId >= 0 && cellId <= 2) return 3;
      else if (cellId >= 3 && cellId <= 5) return 6;
      return 0;
    };

    const firstCellsOfLines = [0, 3, 6];
    firstCellsOfLines.map(cellId => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da linha a partir da casa ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine}`));
        fireEvent.click(getByTestId(`cell_${cellId + 1}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine + 1}`));
        fireEvent.click(getByTestId(`cell_${cellId + 2}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    const getStartOfAnotherColumn = cellId => {
      if (cellId === 0 || cellId === 3 || cellId === 6) return 1;
      else if (cellId === 1 || cellId === 4 || cellId === 7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.map(cellId => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da coluna ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn}`));
        fireEvent.click(getByTestId(`cell_${cellId + 3}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn + 3}`));
        fireEvent.click(getByTestId(`cell_${cellId + 6}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal esquerda para direita (primeira,quinta,nona casa)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_5'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_8'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal direita para esquerda (terceira,quinta,sétima casa)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_8'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_6'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });
  });
  return undefined;
});

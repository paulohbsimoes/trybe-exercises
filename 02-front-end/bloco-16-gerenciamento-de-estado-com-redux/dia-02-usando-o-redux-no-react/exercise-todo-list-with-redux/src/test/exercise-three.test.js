import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';

import renderWithStore from '../helpers/renderWithStore';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    const { getByTestId } = renderWithStore(<App />);
    const btnRemove = getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove.value).toBe('Remover');
    expect(btnRemove.disabled).toBe(true);
  });

  test('Testando a seleção de elemento', () => {
    const { getByLabelText, getByText, queryByText } = renderWithStore(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');
    const btnRemove = getByText('Remover');
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } })
    fireEvent.click(btnAdd);
    fireEvent.change(inputTask, { target: { value: 'Estudar' } })
    fireEvent.click(btnAdd);
    const selectTask = getByText('Exercitar');
    expect(selectTask).toBeInTheDocument();
    fireEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    fireEvent.click(btnRemove);
    expect(btnRemove.disabled).toBe(true);
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  })
});

import React from 'react';
import App from '../App';

import renderWithStore from '../helpers/renderWithStore';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = renderWithStore(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

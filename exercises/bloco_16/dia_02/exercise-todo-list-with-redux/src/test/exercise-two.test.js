import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

import renderWithStore from '../helpers/renderWithStore';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByTestId, getAllByTestId } = renderWithStore(<App />) // Caso precise de uma nova query adicione no object destructuring
    const input = getByTestId('input-todo');
    const button = getByTestId('input-todo-button');

    listTodo.forEach(todo => {
      fireEvent.change(input, { target: { value: todo } })
      fireEvent.click(button);
    })

    const todos = getAllByTestId('todo-item');
    expect(todos.length).toBe(listTodo.length);
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TODO = { todo: 'Nova tarefa', selected: false, id: 1 }
    const { getByText } = renderWithStore(<Item content={ TODO } />)
    const task = getByText(TODO.todo);
    expect(task).toBeInTheDocument();
  })
})

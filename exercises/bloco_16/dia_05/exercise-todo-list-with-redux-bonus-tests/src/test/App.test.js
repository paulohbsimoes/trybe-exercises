import React from 'react';
import App from '../App';
import Item from '../components/Item';

import renderWithStore from '../helpers/renderWithStore';
import userEvent from '@testing-library/user-event';

const INITIAL_STATE = {
  todos: {
    listTodo: {
      0: { id: 0, todo: 'Primeira', selected: false, done: false },
      1: { id: 1, todo: 'Segunda', selected: false, done: false },
      2: { id: 2, todo: 'Terceira', selected: false, done: false },
      3: { id: 3, todo: 'Quarta', selected: false, done: false },
    },
    idCount: 4,
    filter: 'all',
  }
}

const testIds = {
  todoItem: 'todo-item',
  removeTodoButton: 'remove-todo',
  inProgressButton: 'in-progress-button',
  doneButton: 'done-button',
  inputTodo: 'input-todo',
  inputTodoButton: 'input-todo-button',
  todoListControls: 'todo-list-controls',
  filterAll: 'filter-all',
  filterDone: 'filter-done',
  filterInProgress: 'filter-in-progress',
  filterSelected: 'filter-selected',
  selectAllCheckbox: 'select-all-checkbox',
}

describe('Testando funcionalidades', () => {
  test('Deverá ter um input do tipo texto para a descrição do todo', () => {
    const { getByTestId } = renderWithStore(<App />);
    const input = getByTestId(testIds.inputTodo);
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('text');
  })

  test('Deverá ter um botão com o texto "Adicionar" para adicionar o todo', () => {
    const { getByTestId } = renderWithStore(<App />);
    const button = getByTestId(testIds.inputTodoButton);
    expect(button).toBeInTheDocument();
    expect(button.value).toBe('Adicionar');
  })

  test('Ao clicar no botão de adicionar será criado um todo com a descrição do input', () => {
    const { getByTestId, queryAllByTestId } = renderWithStore(<App />);
    const input = getByTestId(testIds.inputTodo);
    const description = 'Descrição do todo';
    const addTodoButton = getByTestId(testIds.inputTodoButton);
    expect(queryAllByTestId(testIds.todoItem).length).toBe(0);
    userEvent.type(input, description);
    userEvent.click(addTodoButton);
    const todo = getByTestId(testIds.todoItem)
    expect(todo).toBeInTheDocument();
    expect(todo).toHaveTextContent(description);
  })

  test('Ao selecionar um ou mais todos, é mostrado um painel com opções para alterá-los', () => {
    const { getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });

    const firstItemCheckbox = getByTestId('item-0-checkbox');
    expect(firstItemCheckbox).toBeInTheDocument();
    userEvent.click(firstItemCheckbox);
    
    const painel = getByTestId(testIds.todoListControls);
    expect(painel).toBeInTheDocument();    
  })

  test('O painel deverá ter três botões para: remoção, conclusão e em andamento.', () => {
    const { getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });

    const firstItemCheckbox = getByTestId('item-0-checkbox');
    expect(firstItemCheckbox).toBeInTheDocument();
    userEvent.click(firstItemCheckbox);
    
    const painel = getByTestId(testIds.todoListControls);
    expect(painel).toBeInTheDocument();

    expect(getByTestId(testIds.removeTodoButton)).toBeInTheDocument();
    expect(getByTestId(testIds.inProgressButton)).toBeInTheDocument();
    expect(getByTestId(testIds.doneButton)).toBeInTheDocument();
  })

  test('Ao selecionar o todo e clicar no botão de remoção, ele é removido', () => {
    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(4);

    const firstItemCheckbox = getByTestId('item-0-checkbox');
    expect(firstItemCheckbox).toBeInTheDocument();
    userEvent.click(firstItemCheckbox);

    const removeButton = getByTestId(testIds.removeTodoButton);
    expect(removeButton).toBeInTheDocument();
    userEvent.click(removeButton);

    expect(getAllByTestId(testIds.todoItem).length).toBe(3);
  });

  test('Ao selecionar o todo e clicar no botão de concluído, conclui o todo', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: true, done: false }
        },
        idCount: 1,
        filter: 'all',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(1);

    const todo = getByTestId(testIds.todoItem);
    expect(todo).toHaveTextContent(/Em progresso/);

    const doneButton = getByTestId(testIds.doneButton);
    expect(doneButton).toBeInTheDocument();
    userEvent.click(doneButton);

    expect(todo).toHaveTextContent(/Concluída/);
  });

  test('Ao selecionar o todo e clicar no botão de em progresso, o todo fica em progresso', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: true, done: true }
        },
        idCount: 1,
        filter: 'all',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(1);

    const todo = getByTestId(testIds.todoItem);
    expect(todo).toHaveTextContent(/Concluída/);

    const inProgressButton = getByTestId(testIds.inProgressButton);
    expect(inProgressButton).toBeInTheDocument();
    userEvent.click(inProgressButton);

    expect(todo).toHaveTextContent(/Em progresso/);
  });

  test('Ao clicar no filtro concluídas, somente as tarefas concluídas aparecem', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: true, done: false },
          1: { id: 1, todo: 'Segunda', selected: true, done: true }
        },
        idCount: 2,
        filter: 'all',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(2);

    const completedTasksFilter = getByTestId(testIds.filterDone);
    expect(completedTasksFilter).toBeInTheDocument();
    userEvent.click(completedTasksFilter);

    expect(getAllByTestId(testIds.todoItem).length).toBe(1);
  });

  test('Ao clicar no filtro em andamento, somente as tarefas em andamento aparecem', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: true, done: false },
          1: { id: 1, todo: 'Segunda', selected: true, done: false },
          2: { id: 2, todo: 'Terceira', selected: true, done: true }
        },
        idCount: 3,
        filter: 'all',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(3);

    const inProgressTasksFilter = getByTestId(testIds.filterInProgress);
    expect(inProgressTasksFilter).toBeInTheDocument();
    userEvent.click(inProgressTasksFilter);

    expect(getAllByTestId(testIds.todoItem).length).toBe(2);
  });

  test('Ao clicar no filtro todas, são mostradas todas as tarefas', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: true, done: false },
          1: { id: 1, todo: 'Segunda', selected: true, done: false },
          2: { id: 2, todo: 'Terceira', selected: true, done: true }
        },
        idCount: 3,
        filter: 'done',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(1);

    const allTasksFilter = getByTestId(testIds.filterAll);
    expect(allTasksFilter).toBeInTheDocument();
    userEvent.click(allTasksFilter);

    expect(getAllByTestId(testIds.todoItem).length).toBe(3);
  });

  test('Ao clicar no filtro selecionadas, são mostradas as tarefas em seleção', () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: false, done: false },
          1: { id: 1, todo: 'Segunda', selected: false, done: false },
          2: { id: 2, todo: 'Terceira', selected: true, done: true }
        },
        idCount: 3,
        filter: 'all',
      }
    }

    const { getAllByTestId, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
    expect(getAllByTestId(testIds.todoItem).length).toBe(3);

    const selectedTasksFilter = getByTestId(testIds.filterSelected);
    expect(selectedTasksFilter).toBeInTheDocument();
    userEvent.click(selectedTasksFilter);

    expect(getAllByTestId(testIds.todoItem).length).toBe(1);
  });

  test(`Ao clicar no check-box geral, se ele estiver desmarcado, é marcado e todas as
  tasks são selecionadas, caso contrário, é desmarcado e todas são desselecionadas.`, () => {
    const INITIAL_STATE = {
      todos: {
        listTodo: {
          0: { id: 0, todo: 'Primeira', selected: false, done: false },
          1: { id: 1, todo: 'Segunda', selected: false, done: false },
          2: { id: 2, todo: 'Terceira', selected: false, done: true }
        },
        idCount: 3,
        filter: 'all',
      }
    }

    const { store, getByTestId } = renderWithStore(
      <App />, { initialState: INITIAL_STATE });
  
    let listTodo = store.getState().todos.listTodo;
    let selectedTodos = Object.values(listTodo).filter(todo => todo.selected);
    expect(selectedTodos.length).toBe(0);
    
    const selectAllCheckbox = getByTestId(testIds.selectAllCheckbox);
    userEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).toBeChecked();

    listTodo = store.getState().todos.listTodo;
    selectedTodos = Object.values(listTodo).filter(todo => todo.selected);
    expect(selectedTodos.length).toBe(3);

    userEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).not.toBeChecked();

    listTodo = store.getState().todos.listTodo;
    selectedTodos = Object.values(listTodo).filter(todo => todo.selected);
    expect(selectedTodos.length).toBe(0);
  })

  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const { getByTestId, getAllByTestId } = renderWithStore(<App />);
    const input = getByTestId('input-todo');
    const button = getByTestId('input-todo-button');

    listTodo.forEach(todo => {
      userEvent.type(input, todo )
      userEvent.click(button);
    })

    const todos = getAllByTestId('todo-item');
    expect(todos.length).toBe(listTodo.length);
  })

  test('O Item deverá ter usar a descrição recebida via props', () => {
    const TODO = { todo: 'Nova tarefa', selected: false, id: 1 }
    const { getByText } = renderWithStore(<Item content={ TODO } />)
    const task = getByText(TODO.todo);
    expect(task).toBeInTheDocument();
  })
});

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_SELECT,
  DONE,
  IN_PROGRESS,
  SELECT_ALL,
  DESELECT_ALL,
  FILTER
} from '../actions/todoListActions';

// const faker = require('faker');

// const todos = [...Array(20)].map((_, index) => ({
//   id: index,
//   todo: faker.lorem.sentence(),
//   selected: false,
//   done: Math.random() < 0.5,
// }))

// const initialState = {
//   listTodo: todos.reduce((acc, cur) => { acc[cur.id] = cur; return acc }, {}),
//   idCount: todos.length,
//   filter: 'all',
// }

const initialState = {
  listTodo: {},
  idCount: 0,
  filter: 'all',
};

export const filters = {
  inProgress: ({ done }) => !done,
  done: ({ done }) => done,
  selected: ({ selected }) => selected,
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { listTodo, idCount } = state;

      const newTodo = {
        id: idCount,
        todo: action.todo,
        selected: false,
        done: false,
      }

      return {
        ...state,
        listTodo: {...listTodo, [idCount]: newTodo},
        idCount: idCount + 1,
      }
    }

    case REMOVE_TODO: {
      const { listTodo } = state;
      const newListTodo = Object.values(listTodo)
        .filter(({ selected }) => !selected)
        .reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {});
      return { ...state, listTodo: newListTodo };
    }

    case TOGGLE_SELECT: {
      const { listTodo } = state;
      const { [action.id]: todo, ...rest } = listTodo;
      const newTodo = {...todo, selected: !todo.selected };
      return {
        ...state,
        listTodo: {
          ...rest,
          [action.id]: newTodo
        }
      }
    }

    case DONE: {
      const { listTodo } = state;
      const newListTodo = Object.values(listTodo)
        .filter(({ selected }) => selected)
        .reduce((acc, cur) => {
          acc[cur.id] = { ...cur, done: true };
          return acc;
        }, {});
      return { ...state, listTodo: { ...listTodo, ...newListTodo } };
    }

    case IN_PROGRESS: {
      const { listTodo } = state;
      const newListTodo = Object.values(listTodo)
        .filter(({ selected }) => selected)
        .reduce((acc, cur) => {
          acc[cur.id] = { ...cur, done: false };
          return acc;
        }, {});
      return { ...state, listTodo: { ...listTodo, ...newListTodo } };
    }

    case SELECT_ALL: {
      const { listTodo, filter } = state;
      const newListTodo = Object.entries(listTodo)
        .filter(([_, todo]) => filters[filter] ? filters[filter](todo) : true)
        .reduce((acc, [key, todo]) => {
          acc[key] = { ...todo, selected: true }
          return acc;
        }, {})
      return { ...state, listTodo: { ...listTodo, ...newListTodo } };
    }

    case DESELECT_ALL: {
      const { listTodo } = state;
      const newListTodo = Object.entries(listTodo).reduce((acc, [key, todo]) => {
        acc[key] = { ...todo, selected: false }
        return acc;
      }, {})
      return { ...state, listTodo: newListTodo }
    }

    case FILTER: {
      return { ...state, filter: action.payload };
    }

    default: return state;
  }
}

export default todoListReducer;

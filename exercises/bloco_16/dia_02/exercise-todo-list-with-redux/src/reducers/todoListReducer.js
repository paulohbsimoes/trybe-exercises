import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_SELECT
} from '../actions/todoListActions';

const initialState = {
  listTodo: {},
  idCount: 0,
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { listTodo, idCount } = state;

      const newTodo = {
        id: idCount,
        todo: action.todo,
        selected: false,
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

    default: return state;
  }
}

export default todoListReducer;

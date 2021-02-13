export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  todo,
})

export const removeTodosAction = () => ({
  type: REMOVE_TODO,
})

export const toggleSelectAction = (id) => ({
  type: TOGGLE_SELECT,
  id,
})

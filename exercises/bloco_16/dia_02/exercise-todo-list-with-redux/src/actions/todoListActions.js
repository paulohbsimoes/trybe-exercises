export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';
export const DONE = 'DONE';
export const IN_PROGRESS = 'IN_PROGRESS';
export const SELECT_ALL = 'SELECT_ALL';
export const DESELECT_ALL = 'DESELECT_ALL';
export const FILTER = 'FILTER';

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

export const doneAction = () => ({
  type: DONE,
})

export const inProgressAction = () => ({
  type: IN_PROGRESS,
})

export const selectAllAction = () => ({
  type: SELECT_ALL,
})

export const deselectAllAction = () => ({
  type: DESELECT_ALL,
})

export const filterAction = (value) => ({
  type: FILTER,
  payload: value,
})

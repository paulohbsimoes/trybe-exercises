import { useState } from 'react';

export default function useArray() {
  const [todos, setTodos] = useState([]);

  function addTodo(description) {
    if (description) setTodos([...todos, description]);
  }

  function clearTodos() {
    setTodos([]);
  }

  return { todos, addTodo, clearTodos };
}

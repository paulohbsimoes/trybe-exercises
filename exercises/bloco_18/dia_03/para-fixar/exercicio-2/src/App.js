import React, { useState } from 'react';
import useArray from './useArray';

function App() {
  const [description, setDescription] = useState('');
  const { todos, addTodo, clearTodos } = useArray();

  function handleAddTodo() {
    addTodo(description);
    setDescription('');
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
        />
        <input type="button" onClick={ handleAddTodo } value="Add todo" />
        <input type="button" onClick={ clearTodos } value="Clear" />
      </form>
      <ul>
        { todos.map((todo) => <li>{ todo }</li>) }
      </ul>
    </div>
  );
}

export default App;

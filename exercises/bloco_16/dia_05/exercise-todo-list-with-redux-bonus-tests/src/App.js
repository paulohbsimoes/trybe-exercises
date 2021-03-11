import React, { Component } from 'react';

import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import TodoListControls from './components/TodoListControls';
import Sticky from './components/Sticky';

import GlobalStyles from './styles/global';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <InputTodo />
        <Sticky>
          <TodoListControls />
        </Sticky>
        <TodoList />
      </div>
    );
  }
}

export default App;

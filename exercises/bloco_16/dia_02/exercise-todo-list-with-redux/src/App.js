import React, { Component } from 'react';

import InputTodo from './InputTodo';
import Item from './Item';

import { removeTodosAction } from './actions/todoListActions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { listTodo, removeTodos } = this.props;
    return (
      <div className="App">
        <InputTodo />
        <input
          disabled={ !Object.values(listTodo).find(({ selected }) => selected) }
          type="button"
          data-testid="id-remove"
          value="Remover"
          onClick={ () => removeTodos() } 
        />
        { listTodo &&
          <ul>
            { Object.values(listTodo).map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} />
                </li>
              )) }
          </ul> }
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  listTodo: todos.listTodo,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodos: () => dispatch(removeTodosAction()),
});

export default connect (mapStateToProps, mapDispatchToProps)(App);

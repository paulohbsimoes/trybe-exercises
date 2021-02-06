import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: {},
      idCount: 0,
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleToggleSelect = this.handleToggleSelect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleToggleSelect(id) {
    this.setState(({ listTodo }) => {
      const { [id]: todo, ...rest } = listTodo;
      const newTodo = {...todo, selected: !todo.selected };
      return {
        listTodo: {
          ...rest,
          [id]: newTodo
        }
      }
    })
  }

  handleRemove() {
    this.setState(({ listTodo }) => ({
      listTodo: Object.values(listTodo)
        .filter(({ selected }) => !selected)
        .reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {})
    }));
  }

  addTodo(todo) {
    this.setState(({ listTodo, idCount }) => ({
      listTodo: {
        ...listTodo,
        [idCount]: {
          todo,
          id: idCount,
          selected: false
        }
      },
      idCount: idCount + 1
    }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input
          disabled={ !Object.values(listTodo).find(({ selected }) => selected) }
          type="button"
          data-testid="id-remove"
          value="Remover"
          onClick={ this.handleRemove } 
        />
        { listTodo &&
          <ul>
            { Object.values(listTodo).map((todo, index) => (
                <li key={index + 1}>
                  <Item handleToggleSelect={ this.handleToggleSelect } content={todo} />
                </li>
              )) }
          </ul> }
      </div>
    );
  }
}
export default App;

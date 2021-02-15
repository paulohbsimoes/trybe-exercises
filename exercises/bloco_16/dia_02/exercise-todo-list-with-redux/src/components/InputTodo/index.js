import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { addTodoAction } from '../../actions/todoListActions';
import { connect } from 'react-redux';

import { StyledInputTodo, Input } from './styles';

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  render() {
    const { addTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <StyledInputTodo>
        <label htmlFor="inputTodo">Tarefa:</label>
        <Input
          data-testid="input-todo"
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input 
          data-testid="input-todo-button"
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo, addTodo)}
        />
      </StyledInputTodo>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo)),
});

export default connect(null, mapDispatchToProps)(InputTodo);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../Item';

import { StyledTodoList, TasksNotFound } from './styles';

import { filters } from '../../reducers/todoListReducer';

class TodoList extends Component {
  render() {
    const { listTodo, filter } = this.props;

    const tasks = Object.values(listTodo)
      .filter((todo) => filters[filter] ? filters[filter](todo) : true)
      
    return (
      <StyledTodoList>
        { !!tasks.length
            ? tasks.map((todo, index) => (
              <li key={index + 1}>
                <Item content={todo} />
              </li>
            ))
            : <TasksNotFound>Nenhuma tarefa encontrada.</TasksNotFound> }
      </StyledTodoList>
    );
  }
}
 
const mapStateToProps = ({ todos }) => ({
  listTodo: todos.listTodo,
  filter: todos.filter,
});

export default connect (mapStateToProps, null)(TodoList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAllAction, deselectAllAction, removeTodosAction,
  doneAction, inProgressAction, filterAction } from '../../actions/todoListActions';

import Checkbox from '../Checkbox';

import { StyledTodoListControls, Options, TrashButton,
  DoneButton, InProgressButton, Dropdown, DropdownButton,
  DropdownContent, DropdownOption } from './styles';

class TodoListControls extends Component {
  render() {
    const { listTodo, selectAll, deselectAll, remove, done, inProgress, filter, selectedFilter } = this.props;
    const selectedItens = Object.values(listTodo).filter(({ selected }) => selected);
    return (
      <StyledTodoListControls>
        <Checkbox 
          checked={ !!selectedItens.length }
          onChange={ ({ target: { checked }}) => checked ? selectAll() : deselectAll() }
        />
        { !!selectedItens.length && <Options>
          <TrashButton onClick={ () => remove() } />
          <InProgressButton onClick={ () => inProgress() } />
          <DoneButton onClick={ () => done() } />
        </Options> }
        { !!selectedItens.length 
          ? `${selectedItens.length} ${ selectedItens.length > 1 ? 'itens selecionados' : 'item selecionado'}`
          : 'Nenhum item selecionado' }

        <Dropdown>
          <DropdownButton />
          <DropdownContent>
            <DropdownOption selected={ selectedFilter === 'all' } onClick={ () => filter('all') }>Todas</DropdownOption>
            <DropdownOption selected={ selectedFilter === 'done' } onClick={ () => filter('done') }>Concluídas</DropdownOption>
            <DropdownOption selected={ selectedFilter === 'inProgress' } onClick={ () => filter('inProgress') }>Em progresso</DropdownOption>        
            <DropdownOption selected={ selectedFilter === 'selected' } onClick={ () => filter('selected') }>Selecionadas</DropdownOption>        
          </DropdownContent>
        </Dropdown>
      </StyledTodoListControls>
    );
  } 
}

const mapStateToProps = ({ todos }) => ({
  listTodo: todos.listTodo,
  selectedFilter: todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  selectAll: () => dispatch(selectAllAction()),
  deselectAll: () => dispatch(deselectAllAction()),
  remove: () => dispatch(removeTodosAction()),
  done: () => dispatch(doneAction()),
  inProgress: () => dispatch(inProgressAction()),
  filter: (value) => dispatch(filterAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListControls);

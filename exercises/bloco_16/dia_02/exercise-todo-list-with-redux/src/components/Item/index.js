import React from 'react';
import PropTypes from 'prop-types'

import { toggleSelectAction } from '../../actions/todoListActions';
import { connect } from 'react-redux';

import { StyledItem, ItemDescription, DescriptionText, Status } from './styles';

import Checkbox from '../Checkbox';

function Item(props) {
  const { content: { todo, selected, id, done }, toggleSelect } = props
  return (
    <StyledItem
      data-testid="todo-item" 
      className={`${selected ? 'selected' : '' }`}
      >
      <Checkbox type="checkbox" checked={ selected } onChange={ () => toggleSelect(id) } />
      <ItemDescription>
        <DescriptionText>{todo}</DescriptionText>
        <Status>{ done ? 'Concluída' : 'Em progresso' }</Status>
      </ItemDescription>
    </StyledItem>
  );
}

Item.propTypes = {
  content: PropTypes.shape({
    todo: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  toggleSelect: (id) => dispatch(toggleSelectAction(id)),
})

export default connect(null, mapDispatchToProps)(Item);

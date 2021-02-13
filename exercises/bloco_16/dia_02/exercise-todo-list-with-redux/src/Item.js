import React from 'react';
import PropTypes from 'prop-types'

import { toggleSelectAction } from './actions/todoListActions'
import { connect } from 'react-redux';

function Item(props) {
  const { content: { todo, selected, id }, toggleSelect } = props
  return (
    <div
      style={{ background: `${ selected ? 'red' : 'unset'}` }}
      data-testid="todo-item" 
      className="Item"
      onClick={ () => toggleSelect(id) }
    >
      {todo}
    </div>
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

import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content: { todo, selected, id }, handleToggleSelect } = props
  return (
    <div
      style={{ background: `${ selected ? 'red' : 'unset'}` }}
      data-testid="todo-item" 
      className="Item"
      onClick={ () => handleToggleSelect(id) }
    >
      {todo}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.shape({
    todo: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
}

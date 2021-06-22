import React, { Component } from 'react';

import Control from '../Control';
import ControlGroup from '../ControlGroup';

import styles from './EditDogCard.module.css';

class EditDogCard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.dogName.focus();
  }

  handleKeyDown({ key }) {
    const { onConfirm } = this.props;
    if (key === 'Enter') onConfirm();
  }

  render() {
    const { onConfirm, onCancel, onChange } = this.props;
    return (
      <div className={ styles['edit-dog']}>
        <form onSubmit={ (event) => event.preventDefault() } autoComplete="off">
          <label htmlFor="dog-name">
            <input
              id="dog-name"
              name="dogName"
              type="text"
              placeholder="Escolha um nome"
              onChange={ onChange }
              onKeyDown={ this.handleKeyDown }
              ref={ (dogName => this.dogName = dogName) }
            />
          </label>
        </form>
        <ControlGroup>
          <Control value="Confirm" action={ onConfirm } />
          <Control value="Cancel" action={ onCancel } />
        </ControlGroup> 
      </div>
    );
  }
}
 
export default EditDogCard;

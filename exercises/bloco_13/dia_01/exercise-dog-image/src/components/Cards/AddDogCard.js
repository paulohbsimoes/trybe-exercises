import React, { Component } from 'react';

import ImageCard from './ImageCard';
import LoadingCard from './LoadingCard';
import Control from '../Control';
import ControlGroup from '../ControlGroup';
import EditDogCard from './EditDogCard';
import Card from './Card';

class AddDogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleToggleEdit() {
    this.setState(({ editMode }) => ({
      editMode: !editMode
    })); 
  }

  handleConfirm() {
    const { handleAdd } = this.props;
    this.handleToggleEdit();
    handleAdd();
  }

  render() {
    const { source, handleNext, handleClear, loading, onChange } = this.props;
    const { editMode } = this.state; 
    return (
      <Card>
        { loading 
          ? <LoadingCard />
          : <ImageCard source={ source } /> }
          
        { editMode 
          ? <EditDogCard
            onConfirm={ this.handleConfirm }
            onCancel={ this.handleToggleEdit }
            onChange={ onChange } />
          : <ControlGroup>
              <Control action={ this.handleToggleEdit } value="Add" />
              <Control action={ handleNext } value="Next" />
              <Control action={ handleClear } value="Clear" />
            </ControlGroup> }
      </Card>
    );
  }
}

export default AddDogCard;

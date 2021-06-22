import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import Resume from './Resume';

import { Creators as FormActions } from '../store/ducks/form';

class FormWithValidation extends Component {
  render() { 
    const { errors, values, showResume, change,
      blur, submit, clear } = this.props;
    return (
      <>
        <Form
          values={values}
          errors={errors}
          handleChange={ change }
          handleBlur={ blur }
          handleSubmit={ submit }
          handleClear={ clear }
        />
        { showResume && <Resume values={ values } /> }
      </>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  errors: form.errors,
  values: form.values,
  showResume: form.showResume,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormWithValidation);

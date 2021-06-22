import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { location: { state: { user: { username, password } } } } = this.props;
    // const { user: { username, password } } = this.props;
    if (username === 'joao' && password === '1234') {
      return <h1>Bem-vindo João</h1>;
    }
    alert('Acesso negado.');
    return <Redirect to="/login" />
  }
}
 
export default StrictAccess;

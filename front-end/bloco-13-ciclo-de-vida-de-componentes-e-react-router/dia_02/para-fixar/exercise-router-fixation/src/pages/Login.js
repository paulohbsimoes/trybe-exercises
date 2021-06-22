import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './Login.module.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  renderRedirect() {
    const { username, password } = this.state;
    return <Redirect to={{
      pathname: "/strict-access",
      state: {
        user: {
          username,
          password,
        }
      }
    }} />
  }

  render() {
    const { redirect } = this.state;
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>eêÊÊÊÊ tranquera</h1>
        <form
          className={ styles.loginForm }
          onSubmit={ this.handleSubmit }
        >
          <label htmlFor="username">
            Username:
            <input
              id="username"
              name="username"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              name="password"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <button type="submit">Login</button>
        </form>
        { redirect && this.renderRedirect() }
      </>
    );
  }
}
 
export default Login;

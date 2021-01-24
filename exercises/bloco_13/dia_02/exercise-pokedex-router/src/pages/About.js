import React, { Component } from 'react';

import styles from './About.module.css';

import aboutBackground from '../assets/about_background.webp';

class About extends Component {
  render() { 
    return (
      <>
        <h1>About Pokedex</h1>
        <p>This application simulates a Pokedex, a digital encyclopedia containing all Pokemons </p>
        <p>One can filter Pokemons by type, and see more details for each one of them</p>
        <img className={ styles.background } src={ aboutBackground } alt="Pokedex" />
      </>
    );
  }
}
 
export default About;

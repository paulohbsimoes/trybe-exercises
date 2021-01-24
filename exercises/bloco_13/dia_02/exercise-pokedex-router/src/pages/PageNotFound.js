import React, { Component } from 'react';

import notFound from '../assets/not-found.gif';

class PageNotFound extends Component {
  render() { 
    return (
      <div>
        <h1>Requested page not found &#128557;</h1>
        <img src={ notFound } alt="Page not found gif"/>
      </div>
    );
  }
}
 
export default PageNotFound;

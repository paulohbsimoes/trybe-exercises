import React from 'react';

import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}

export default App;

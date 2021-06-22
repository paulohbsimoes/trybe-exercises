import React from 'react';
import FancyButton from './FancyButton';

class App extends React.Component {
  render() {
    return (
      <div>
        {['Primeiro', 'Segundo', 'Terceiro'].map((text, index) => (
          <FancyButton text={text} key={index} />
        ))}
      </div>
    );
  }
}

export default App;

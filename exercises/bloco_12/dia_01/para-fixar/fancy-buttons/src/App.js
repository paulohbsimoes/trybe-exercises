import React from 'react';
import FancyButton from './FancyButton';

const handleClick = (text) => console.log(text);

class App extends React.Component {
  render() {
    return (
      <div>
        {['Primeiro', 'Segundo', 'Terceiro'].map((text, index) => (
          <FancyButton text={text} handleClick={handleClick} key={index} />
        ))}
      </div>
    );
  }
}

export default App;

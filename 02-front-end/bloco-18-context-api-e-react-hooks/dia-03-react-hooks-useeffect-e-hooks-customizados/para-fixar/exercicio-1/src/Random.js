import React, { useEffect, useState } from 'react';

import './Random.css';

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

const ONE_SECOND = 1000;
const NEW_NUMBER_DELAY = ONE_SECOND * 10;
const MESSAGE_APPEARANCE_TIME = 4;

function App() {
  const [number, setNumber] = useState(getRandomNumber());
  const [timer, setTimer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(getRandomNumber());
    }, NEW_NUMBER_DELAY);

    return () => { clearInterval(interval); }
  }, []);

  useEffect(() => {
    setIsCorrect(number % 3 === 0 || number % 5 === 0);
  }, [number])

  useEffect(() => {
    if (isCorrect) setTimer(MESSAGE_APPEARANCE_TIME);
  }, [isCorrect]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, ONE_SECOND);
    }
  }, [timer]);

  return (
    <div className="container">
      <div className="randomizer">
        <p>{ number }</p>
        { Boolean(timer) && <p style={{
          opacity: timer / MESSAGE_APPEARANCE_TIME
        }}>Acertou</p> }
      </div>
    </div>
  );
}

export default App;

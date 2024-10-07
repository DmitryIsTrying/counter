import React, { useEffect, useState } from 'react';
import './App.css';
import { IncrementsSettings } from './components/incrementsSettings/IncrementsSettings';
import { Counter } from './components/counter/Counter';

export type IncrementsObj = {
  startInc: number;
  endInc: number;
};

function App() {
  const [increments, setIncrements] = useState<IncrementsObj>({
    startInc: 1,
    endInc: 0,
  });

  const [counter, setCounter] = useState<number>(0);

  const [randomNum, setRandomNum] = useState<number>(
    Math.floor(Math.random() * 10) + 1
  );

  const [isOn, setIsOn] = useState<boolean>(true);

  useEffect(() => {
    setIncrements({
      startInc: Number(localStorage.getItem('startInc') || 0),
      endInc: Number(localStorage.getItem('endInc') || 0),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('startInc', JSON.stringify(increments.startInc));
    localStorage.setItem('endInc', JSON.stringify(increments.endInc));
  }, [increments]);

  return (
    <div className="App">
      <IncrementsSettings
        setIncrements={setIncrements}
        increments={increments}
        isOn={isOn}
        setIsOn={setIsOn}
        setCounter={setCounter}
      />
      <Counter
        setCounter={setCounter}
        increments={increments}
        isOn={isOn}
        counter={counter}
        setRandomNum={setRandomNum}
        randomNumber={randomNum}
      />
    </div>
  );
}

export default App;

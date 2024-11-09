import React, { useEffect, useState } from 'react';
import './App.css';
import { IncrementsSettings } from './components/incrementsSettings/IncrementsSettings';
import { Counter } from './components/counter/Counter';
import { useDispatch } from 'react-redux';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const [isOn, setIsOn] = useState<boolean>(true);

  return (
    <div className="App">
      <IncrementsSettings />
      <Counter />
    </div>
  );
}

export default App;

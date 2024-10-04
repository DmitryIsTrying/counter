import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Container} from "./components/container/Container";
import {CountParagraph} from "./components/countParagraph/CountParagraph";
import styles from "./components/countParagraph/counterParagraph.module.css";

import {IncrementsSettings} from "./components/incrementsSettings/IncrementsSettings";
import {Counter} from "./components/counter/Counter";

export type IncrementsObj = {
    startInc: number;
    endInc: number;
}

function App() {

    const [increments, setIncrements] = useState<IncrementsObj>({
        startInc: 0,
        endInc: 0,
    })

    const [counter, setCounter] = useState<number>(0);

    const [randomNum, setRandomNum] = useState<number>(Math.ceil(Math.random() * 10));

    const [isOn, setIsOn] = useState<boolean>(true);

    useEffect(() => {
        setIncrements({startInc: Number(localStorage.getItem('startInc')), endInc: Number(localStorage.getItem('endInc'))});
    }, [])

    useEffect(() => {
        localStorage.setItem('startInc', JSON.stringify(increments.startInc))
        localStorage.setItem('endInc', JSON.stringify(increments.endInc))
    }, [increments])


    return (
        <div className="App">
            <IncrementsSettings setIncrements={setIncrements} increments={increments} isOn={isOn} setIsOn={setIsOn} setCounter={setCounter}/>
            <Counter setCounter={setCounter} increments={increments} isOn={isOn} counter={counter} setRandomNum={setRandomNum} randomNumber={randomNum}/>
        </div>
    );
}

export default App;

import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Container} from "./components/container/Container";
import {CountParagraph} from "./components/countParagraph/CountParagraph";
import styles from "./components/countParagraph/counterParagraph.module.css";
import {Input} from "./components/input/Input";
import stylesInput from './components/input/input.module.css'

type IncsProps = {
    startInc: number;
    endInc: number;
}

function App() {

    const [incs, setIncs] = useState<IncsProps>({
        startInc: 0,
        endInc: 0,
    })

    const [counter, setCounter] = useState<number>(0);


    const [randomNum, setRandomNum] = useState(Math.ceil(Math.random() * 10));

    const [isOn, setIsOn] = useState<boolean>(true);

    useEffect(() => {
        setIncs({startInc: Number(localStorage.getItem('startInc')), endInc: Number(localStorage.getItem('endInc'))});
    }, [])

    useEffect(() => {
        localStorage.setItem('startInc', JSON.stringify(incs.startInc))
        localStorage.setItem('endInc', JSON.stringify(incs.endInc))
    }, [incs])


    function handleChangeStartInc(e: ChangeEvent<HTMLInputElement>) {
        setIncs({...incs, startInc: Number(e.currentTarget.value)})

    }

    function handleChangeEndInc(e: ChangeEvent<HTMLInputElement>) {
        setIncs({...incs, endInc: Number(e.currentTarget.value)})
    }

    function changeMaxValueType() {
        setCounter(incs.startInc)
        if (!isOn) {
            setCounter(0)
        }
        setIsOn(!isOn)
    }


    function increment() {
        setCounter(counter + 1)
    }

    function resetInc() {
        let random = Math.ceil(Math.random() * 10)
        if (random === 11) {
            random--
        }
        setRandomNum(random)
        setCounter(isOn ? 0 : incs.startInc)
    }

    const styleBtnContainer = {
        display: 'flex',
        gap: '30px',
    }

    const styleProgress = {
        width: "250px",
        height: "10px",
        backgroundColor: "#000000",
    }

    const styleChangeText = {
        fontSize: '30px',
        fontWeight: 'bold',
    }

    const trueChangeText = {
        color: 'lime'
    }

    const falseChangeText = {
        color: 'red'
    }

    return (
        <div className="App">
            <Container>
                <p style={{
                    ...styleChangeText,
                    ...(isOn ? trueChangeText : falseChangeText)
                }}>{isOn ? "You can change" : "You can't change"}</p>
                <Input disabled={!isOn} min={1} max={99} value={incs.endInc}
                       className={`${stylesInput.inputStart} ${stylesInput.end}`} onChange={handleChangeEndInc}
                       placeholder={String(incs.endInc)}/>
                <Input disabled={!isOn} min={0} max={98} value={incs.startInc}
                       className={`${stylesInput.inputStart} ${stylesInput.start}`} onChange={handleChangeStartInc}
                       placeholder={String(incs.startInc)}/>
                <div style={styleBtnContainer}>
                    <Button disabled={!(incs.startInc < incs.endInc)}
                            style={{backgroundColor: isOn ? '#ec4141' : '#52ec41'}}
                            onClick={changeMaxValueType}>{isOn ? 'Off' : 'On'}</Button>
                </div>
            </Container>
            <Container>
                <CountParagraph className={styles.maxValue}>Max value: {isOn ? randomNum : incs.endInc}</CountParagraph>
                <CountParagraph
                    className={`${styles.counter} ${!isOn ? counter >= incs.endInc ? styles.disabled : styles.active : counter >= randomNum ? styles.disabled : styles.active}`}>{counter}</CountParagraph>
                <progress style={styleProgress} value={counter} max={isOn ? randomNum : incs.endInc}></progress>
                <div style={styleBtnContainer}>
                    <Button disabled={isOn ? counter >= randomNum : counter >= incs.endInc}
                            onClick={increment}>inc</Button>
                    <Button disabled={isOn ? counter === 0 : counter === incs.startInc}
                            onClick={resetInc}>reset</Button>
                </div>
            </Container>
        </div>
    );
}

export default App;

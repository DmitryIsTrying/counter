import React from 'react';
import {Container} from "../container/Container";
import {CountParagraph} from "../countParagraph/CountParagraph";
import styles from "../countParagraph/counterParagraph.module.css";
import {Button} from "../button/Button";
import {IncrementsObj} from "../../App";
import cont from '../container/container.module.css'

type CounterPropsType = {
    isOn: boolean,
    randomNumber: number,
    counter: number,
    increments: IncrementsObj
    setRandomNum: (randomNumber: number) => void
    setCounter: (counter: number) => void
}

export const Counter = ({isOn, randomNumber, counter, increments, setRandomNum, setCounter}: CounterPropsType) => {

    // Handlers functions

    function handleUpCounter() {
        setCounter(counter + 1)
    }

    function handleResetCounter() {
        let random = Math.ceil(Math.random() * 10)
        if (random === 11) {
            random--
        }
        setRandomNum(random)
        setCounter(isOn ? 0 : increments.startInc)
    }


    // end

    //  styles logic

    const classLogicForCounterParagraphRight = counter >= increments.endInc ? styles.disabled : styles.active
    const classLogicForCounterParagraphLeft = counter >= randomNumber ? styles.disabled : styles.active
    const classLogicForCounterParagraphLast = !isOn ?  classLogicForCounterParagraphRight : classLogicForCounterParagraphLeft
    const classForCounterParagraph = styles.counter + ' ' + classLogicForCounterParagraphLast

    // end


    return (
        <Container>
            <CountParagraph className={styles.maxValue}>Max
                value: {isOn ? randomNumber : increments.endInc}</CountParagraph>
            <CountParagraph
                className={classForCounterParagraph}>{counter}</CountParagraph>
            <progress className={cont.progress} value={counter} max={isOn ? randomNumber : increments.endInc}></progress>
            <div className={cont.btnContainer}>
                <Button disabled={isOn ? counter >= randomNumber : counter >= increments.endInc}
                        onClick={handleUpCounter}>inc</Button>
                <Button disabled={isOn ? counter === 0 : counter === increments.startInc}
                        onClick={handleResetCounter}>reset</Button>
            </div>
        </Container>
    );
}
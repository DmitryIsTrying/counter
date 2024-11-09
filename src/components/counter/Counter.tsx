import { memo, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCounterValueAC,
  upCounterValueAC,
} from '../../bll/reducers/counter-reducer';
import { IncrementsObj } from '../../bll/reducers/increments-reducer';
import { AppRootState } from '../../bll/store/store';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { Button } from '../button/Button';
import { Container } from '../container/Container';
import cont from '../container/container.module.css';
import { CountParagraph } from '../countParagraph/CountParagraph';
import styles from '../countParagraph/counterParagraph.module.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const { startInc, endInc } = useSelector<AppRootState, IncrementsObj>(
    (state) => state.increments
  );
  const counter = useSelector<AppRootState, number>((state) => state.counter);
  const toggle = useSelector<AppRootState, boolean>((state) => state.toggle);

  const currentNum = useRef(getRandomNumber());
  const randomNumber = currentNum.current;

  // Handlers functions

  function handleUpCounter() {
    dispatch(upCounterValueAC());
  }

  function handleResetCounter() {
    dispatch(setCounterValueAC(toggle ? 0 : startInc));
    currentNum.current = getRandomNumber();
  }

  // end

  //  styles logic

  const classLogicForCounterParagraphRight =
    counter >= endInc ? styles.disabled : styles.active;
  const classLogicForCounterParagraphLeft =
    counter >= randomNumber ? styles.disabled : styles.active;
  const classLogicForCounterParagraphLast = !toggle
    ? classLogicForCounterParagraphRight
    : classLogicForCounterParagraphLeft;
  const classForCounterParagraph =
    styles.counter + ' ' + classLogicForCounterParagraphLast;

  // end

  return (
    <Container>
      <CountParagraph className={styles.maxValue}>
        Max value: {toggle ? randomNumber : endInc}
      </CountParagraph>
      <CountParagraph className={classForCounterParagraph}>
        {counter}
      </CountParagraph>
      <progress
        className={cont.progress}
        value={counter}
        max={toggle ? randomNumber : endInc}
      ></progress>
      <div className={cont.btnContainer}>
        <Button
          disabled={toggle ? counter >= randomNumber : counter >= endInc}
          onClick={handleUpCounter}
        >
          inc
        </Button>
        <Button
          disabled={toggle ? counter === 0 : counter === startInc}
          onClick={handleResetCounter}
        >
          reset
        </Button>
      </div>
    </Container>
  );
};

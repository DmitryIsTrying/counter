import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  IncrementsObj,
  setEndIncAC,
  setStartIncAC,
} from '../../bll/reducers/increments-reducer';
import { Button } from '../button/Button';
import { Container } from '../container/Container';
import commonStyles from '../container/container.module.css';
import { Input } from '../input/Input';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../bll/store/store';
import { setCounterValueAC } from '../../bll/reducers/counter-reducer';
import { switchAC } from '../../bll/reducers/toggle-reducer';

export const IncrementsSettings = () => {
  const dispatch = useDispatch();
  const { startInc, endInc } = useSelector<AppRootState, IncrementsObj>(
    (store) => store.increments
  );
  const toggle = useSelector<AppRootState, boolean>((state) => state.toggle);

  // Handlers functions
  function handleChangeStartInc(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setStartIncAC(+e.currentTarget.value));
  }

  function handleChangeEndInc(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setEndIncAC(+e.currentTarget.value));
  }

  function changeMaxValueType() {
    dispatch(setCounterValueAC(startInc));
    if (!toggle) {
      dispatch(setCounterValueAC(0));
    }
    dispatch(switchAC());
  }

  // end

  // styles logic
  const logicClassForParagraph = toggle
    ? commonStyles.trueChangeText
    : commonStyles.falseChangeText;
  const classForParagraph =
    commonStyles.changeText + ' ' + logicClassForParagraph;

  const classForEndInput = commonStyles.inputStart + ' ' + commonStyles.end;

  const classForStartInput = commonStyles.inputStart + ' ' + commonStyles.start;

  const styleForBtn = { backgroundColor: toggle ? '#ec4141' : '#52ec41' };
  // end

  return (
    <Container>
      <p className={classForParagraph}>
        {toggle ? 'You can change' : "You can't change"}
      </p>
      <Input
        disabled={!toggle}
        min={1}
        max={99}
        value={endInc}
        className={classForEndInput}
        onChange={handleChangeEndInc}
      />
      <Input
        disabled={!toggle}
        min={0}
        max={98}
        value={startInc}
        className={classForStartInput}
        onChange={handleChangeStartInc}
      />
      <div className={commonStyles.btnContainer}>
        <Button
          disabled={startInc >= endInc}
          style={styleForBtn}
          onClick={changeMaxValueType}
        >
          {toggle ? 'Off' : 'On'}
        </Button>
      </div>
    </Container>
  );
};

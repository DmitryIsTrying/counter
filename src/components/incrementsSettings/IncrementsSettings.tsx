import React, {ChangeEvent} from 'react';
import {Container} from "../container/Container";
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import commonStyles from '../container/container.module.css'
import {IncrementsObj} from "../../App";


type IncrementsSettingsPropsType = {
    isOn: boolean
    increments: IncrementsObj
    setIncrements: (incrementsObj: IncrementsObj) => void
    setCounter: (counter: number) => void
    setIsOn: (isOn: boolean) => void
}

export const IncrementsSettings = ({
                                       isOn,
                                       increments,
                                       setIncrements,
                                       setCounter,
                                       setIsOn
                                   }: IncrementsSettingsPropsType) => {

    // Handlers functions

    function handleChangeStartInc(e: ChangeEvent<HTMLInputElement>) {
        setIncrements({...increments, startInc: Number(e.currentTarget.value)})

    }

    function handleChangeEndInc(e: ChangeEvent<HTMLInputElement>) {
        setIncrements({...increments, endInc: Number(e.currentTarget.value)})
    }

    function changeMaxValueType() {
        setCounter(increments.startInc)
        if (!isOn) {
            setCounter(0)
        }
        setIsOn(!isOn)
    }

    // end


    // styles logic
    const logicClassForParagraph = isOn ? commonStyles.trueChangeText : commonStyles.falseChangeText
    const classForParagraph = commonStyles.changeText + ' ' + logicClassForParagraph

    const classForEndInput = commonStyles.inputStart + ' ' + commonStyles.end

    const classForStartInput = commonStyles.inputStart + ' ' + commonStyles.start

    const styleForBtn = {backgroundColor: isOn ? '#ec4141' : '#52ec41'}
    // end

    return (
        <Container>
            <p className={classForParagraph}>{isOn ? "You can change" : "You can't change"}</p>
            <Input disabled={!isOn} min={1} max={99} value={increments.endInc}
                   className={classForEndInput} onChange={handleChangeEndInc}
            />
            <Input disabled={!isOn} min={0} max={98} value={increments.startInc}
                   className={classForStartInput} onChange={handleChangeStartInc}
            />
            <div className={commonStyles.btnContainer}>
                <Button disabled={increments.startInc >= increments.endInc}
                        style={styleForBtn}
                        onClick={changeMaxValueType}>{isOn ? 'Off' : 'On'}</Button>
            </div>
        </Container>
    );
};
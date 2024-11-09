export const counterReducer = (
  state: number = 0,
  action: ActionsType
): number => {
  switch (action.type) {
    case 'SET_COUNTER_VALUE': {
      return action.payload.newValue;
    }
    case 'UP_COUNTER_VALUE': {
      return state + 1;
    }
    default:
      return state;
  }
};

export const setCounterValueAC = (newValue: number) => {
  return { type: 'SET_COUNTER_VALUE', payload: { newValue } } as const;
};

export const upCounterValueAC = () => {
  return { type: 'UP_COUNTER_VALUE' } as const;
};

type setCounterValueType = ReturnType<typeof setCounterValueAC>;
type upCounterValueType = ReturnType<typeof upCounterValueAC>;
type ActionsType = setCounterValueType | upCounterValueType;

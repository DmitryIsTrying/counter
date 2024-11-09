import { loadState } from '../../utils/localstorage';

export type IncrementsObj = {
  startInc: number;
  endInc: number;
};

const initState = loadState();

type SetStartIncActionType = ReturnType<typeof setStartIncAC>;

type SetEndIncActionType = ReturnType<typeof setEndIncAC>;
type ActionsType = SetEndIncActionType | SetStartIncActionType;

export const IncrementsReducer = (
  state: IncrementsObj = initState,
  action: ActionsType
): IncrementsObj => {
  switch (action.type) {
    case 'SET_START_INC': {
      return { ...state, startInc: action.payload.newValue };
    }
    case 'SET_END_INC': {
      return { ...state, endInc: action.payload.newValue };
    }
    default:
      return state;
  }
};

export const setStartIncAC = (newValue: number) => {
  return { type: 'SET_START_INC', payload: { newValue } } as const;
};

export const setEndIncAC = (newValue: number) => {
  return { type: 'SET_END_INC', payload: { newValue } } as const;
};

import {
  IncrementsObj,
  IncrementsReducer,
  setEndIncAC,
  setStartIncAC,
} from '../reducers/increments-reducer';

let state: IncrementsObj;

beforeEach(() => {
  state = {
    startInc: 24,
    endInc: 12,
  };
});

test('startInc should be changed', () => {
  const endState = IncrementsReducer(state, setStartIncAC(25));

  expect(endState.endInc).not.toBe(13);
  expect(endState.startInc).not.toBe(24);
  expect(endState.startInc).toBe(25);
  expect(endState).not.toBe(state);
});

test('endInc should be changed', () => {
  const endState = IncrementsReducer(state, setEndIncAC(11));

  expect(endState.startInc).not.toBe(23);
  expect(endState.endInc).not.toBe(12);
  expect(endState.endInc).toBe(11);
  expect(endState).not.toBe(state);
});

import {
  counterReducer,
  setCounterValueAC,
  upCounterValueAC,
} from '../reducers/counter-reducer';

let state: number;

beforeEach(() => {
  state = 5;
});

test('counter should be changed', () => {
  const endState = counterReducer(state, setCounterValueAC(8));

  expect(endState).toBe(8);
  expect(endState).not.toBe(5);
});

test('counter should be upped', () => {
  const endState = counterReducer(state, upCounterValueAC());

  expect(endState).toBe(6);
  expect(endState).not.toBe(5);
});

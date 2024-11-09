import { switchAC, toggleReducer } from '../reducers/toggle-reducer';

let state: boolean;

beforeEach(() => {
  state = false;
});

test('toggle should be switched', () => {
  const endState = toggleReducer(state, switchAC());

  expect(endState).toBeTruthy();
  expect(endState).not.toBeFalsy();
});

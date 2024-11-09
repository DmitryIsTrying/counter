import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from '../../utils/localstorage';
import { IncrementsReducer } from '../reducers/increments-reducer';
import { throttle } from 'lodash';
import { counterReducer } from '../reducers/counter-reducer';
import { toggleReducer } from '../reducers/toggle-reducer';

const rootReducer = combineReducers({
  increments: IncrementsReducer,
  counter: counterReducer,
  toggle: toggleReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
store.subscribe(
  throttle(() => {
    saveState(store.getState().increments);
  }, 1000)
);

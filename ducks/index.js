/*
* A module...
* MUST export default a function called reducer()
* MUST export its action creators as functions
* MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
* MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
* */

import { combineReducers } from 'redux';
import wishlist from './wishlist';
import { reducer as formReducer } from 'redux-form';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

// ACTIONS
const ADD = 'ADD';
const TICK = 'TICK';

// REDUCERS
const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      });
    case ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  wishlist,
  form: formReducer,
});

export default rootReducer;

// ACTION CREATORS
export const serverRenderHome = (isServer) => (dispatch) => {
  return dispatch({ type: TICK, light: !isServer, ts: Date.now() });
};

export const startClock = () => (dispatch) => {
  return setInterval(
    () => dispatch({ type: TICK, light: true, ts: Date.now() }),
    1000
  );
};

export const addCount = () => (dispatch) => {
  return dispatch({ type: ADD });
};

// SIDE EFFECTS

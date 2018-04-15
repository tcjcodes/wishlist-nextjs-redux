import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../ducks';

const initStore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};

export default initStore;
import counterReducer from './counter';
import loggedReducer from './islogged';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counterReducer,
  loggedReducer
});

export default allReducer;

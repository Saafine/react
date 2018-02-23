import { combineReducers } from 'redux';
import appReducer from './app.reducers';

const todoApp = combineReducers({
  appReducer,
});

export default todoApp;
import { combineReducers } from 'redux';
import album from './album'

const todolistApp = combineReducers({
  album,
});

export default todolistApp;
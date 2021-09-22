import {combineReducers} from 'redux';
import {appReducer} from './reducers/app';

export const rootReducer = () => combineReducers({
  appReducer,
});
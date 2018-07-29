import { combineReducers } from 'redux';
import customers from './customerReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers(
  {
    customers,
    authors,
    ajaxCallsInProgress
  }
);

export default rootReducer;
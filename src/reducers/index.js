import { combineReducers } from 'redux';
import customers from './customerReducer';
import vehicles from './vehicleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers(
  {
    customers,
    vehicles,
    ajaxCallsInProgress
  }
);

export default rootReducer;
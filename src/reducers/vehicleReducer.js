import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function vehicleReducer(state = initialState.vehicles, action) {
  switch(action.type) {
    case types.LOAD_VEHICLES_SUCCESS: 
      return action.vehicles;
    
    default:
      return state;
  }
}
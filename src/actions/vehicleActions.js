import VehicleApi from '../api/mockVehicleApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadVehiclesSuccess(vehicles) {
  return {type: types.LOAD_VEHICLES_SUCCESS, vehicles};
}

export function loadVehicles() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return VehicleApi.getAllVehicles().then(
      vehicles => {
        dispatch(loadVehiclesSuccess(vehicles));
      }
    ).catch(error => {
      throw(error);
    });
  };
}
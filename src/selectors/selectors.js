export function vehiclesFormattedForDropdown(vehicles) {
  return vehicles.map(vehicle => {
    return {
      value: vehicle.id,
      text: vehicle.model
    };
  });
}

export function getSelectedVehicle(vehicles, selectedVehicleId) {
  debugger;
  return vehicles.filter(vehicle => vehicle.id === selectedVehicleId)[0];
}
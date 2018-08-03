export function vehiclesFormattedForDropdown(vehicles) {
  return vehicles.map(vehicle => {
    return {
      value: vehicle.id,
      text: vehicle.color + ' ' + vehicle.model
    };
  });
}
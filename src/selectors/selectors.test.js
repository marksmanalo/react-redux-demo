import expect from 'expect';
import { vehiclesFormattedForDropdown } from './selectors';

describe('Vehicle Selectors', () => {
  describe('vehiclesFormattedForDropdown', () => {
    it('should return vehicle data formatted for use in a dropdown', () => {
      const vehicles = [
        {id: 'white-civic', miles: '10000', color: 'white', model: 'Civic'},
        {id: 'black-crv', miles: '20000', color: 'black', model: 'CRV'}
      ];

      const expected = [
        {value: 'white-civic', text: 'white Civic'},
        {value: 'black-crv', text: 'black CRV'}
      ];

      expect(vehiclesFormattedForDropdown(vehicles)).toEqual(expected);
    });
  });
});
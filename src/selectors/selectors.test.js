import expect from 'expect';
import { vehiclesFormattedForDropdown } from './selectors';

describe('Vehicle Selectors', () => {
  describe('vehiclesFormattedForDropdown', () => {
    it('should return vehicle data formatted for use in a dropdown', () => {
      const vehicles = [
        {id: 'civic', miles: '10000', color: 'white', model: 'Civic'},
        {id: 'crv', miles: '20000', color: 'black', model: 'CRV'}
      ];

      const expected = [
        {value: 'civic', text: 'Civic'},
        {value: 'crv', text: 'CRV'}
      ];

      expect(vehiclesFormattedForDropdown(vehicles)).toEqual(expected);
    });
  });
});
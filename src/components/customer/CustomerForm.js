import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CustomerForm = ({customer, allVehicles, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Customer</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={customer.firstName}
        onChange={onChange}
        error={errors.firstName}
        inputType="text"
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={customer.lastName}
        onChange={onChange}
        error={errors.lastName}
        inputType="text"
      />    

      <SelectInput
        name="vehicleId"
        label="Vehicle"
        value={customer.vehicleId}
        defaultOption="Select Vehicle"
        options={allVehicles}
        onChange={onChange}
        error={errors.vehicleId}
      />

      <TextInput
        name="email"
        label="Email"
        value={customer.email}
        onChange={onChange}
        error={errors.email}
        inputType="text"
      />

      <TextInput
        name="phoneNumber"
        label="Phone Number"
        value={customer.phoneNumber}
        onChange={onChange}
        error={errors.phoneNumber}
        inputType="number"
      />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

export default CustomerForm;
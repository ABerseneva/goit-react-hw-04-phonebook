import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './FilterStyled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Find contact..."
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

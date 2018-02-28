import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RadioButton = ({ label, value, name, checked, onChange, ...rest }) => (
  <Fragment>
    <input
      type="radio"
      id={value + name} // must be unique
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor={value + name}>{label}</label>
  </Fragment>
);


RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default RadioButton;

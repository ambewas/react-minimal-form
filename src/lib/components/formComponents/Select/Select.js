import React from "react";
import { makeFormElement } from "../../HOC";
import PropTypes from "prop-types";

const makeOptions = data => {
  return data.map(item => (
    <option key={item.value} value={item.value}>{item.label}</option>
  ));
};

const Select = ({ id, data, value, ...rest }) => {
  return (
    <select name={id} {...rest} value={value || "default"} >
      <option value="default" disabled hidden>select</option>
      {makeOptions(data)}
    </select>
  );
};

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        value: PropTypes.string,
        label: PropTypes.string,
      }
    )
  ),
  id: PropTypes.string,
  value: PropTypes.string,
};

export default makeFormElement(Select);

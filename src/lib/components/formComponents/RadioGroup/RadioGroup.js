import React from "react";
import RadioButton from "./RadioButton";
import PropTypes from "prop-types";
import { makeFormElement } from "../../HOC";

const RadioGroup = ({ name, data, onChange, value }) => {
  return data.map(item => {
    return (
      <RadioButton
        key={item.value}
        name={name}
        onChange={onChange}
        checked={value === item.value}
        {...item}
      />
    );
  });
};

RadioGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default makeFormElement(RadioGroup);

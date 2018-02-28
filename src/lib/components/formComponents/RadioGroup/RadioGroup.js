import React from "react";
import RadioButton from "./RadioButton";
import PropTypes from "prop-types";
import { makeFormElement } from "../../HOC";

const RadioGroup = ({ id, data, onChange, value }) => {
  return data.map(item => {
    return (
      <RadioButton
        key={item.value}
        name={id}
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
  id: PropTypes.string, // HOC prop
  onChange: PropTypes.func,
};

export default makeFormElement(RadioGroup);

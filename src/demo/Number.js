import React from "react";
import { makeFormElement } from "../lib";
import PropTypes from "prop-types";

const NumberStepper = (props) => {
  const { step, max, min, value, label, id, ...rest } = props;

  const handleIncrementClick = () => {
    setNewValue(value + 1);
  };

  const handleDecrementClick = () => {
    setNewValue(value - 1);
  };

  const setNewValue = (newValue) => {
    if ((max && newValue > max) || (min && newValue < min)) {
      return;
    }
    console.log("newValue", newValue);
    props.onChange(newValue);
  };

  return (
    <div className="a-input a-input--numberStepper ">
      {label && <label htmlFor={id}>{label}</label>}

      <div className="a-input__field-holder">
        <button className="icon-min" onClick={handleDecrementClick}></button>

        <input
          type="numberStepper"
          name={id}
          id={id}
          value={value}
          {...rest}
        />

        <button className="icon-add" onClick={handleIncrementClick}></button>
      </div>

    </div>
  );
};

NumberStepper.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  id: PropTypes.string.isRequired,
  label: PropTypes.label,
  onChange: PropTypes.func,
};

export default makeFormElement(NumberStepper);

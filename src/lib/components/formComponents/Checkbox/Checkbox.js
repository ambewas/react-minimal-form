import React from "react";
import { makeFormElement } from "../../HOC";
import PropTypes from "prop-types";

const Checkbox = (props) => (
  <input
    type="checkbox"
    checked={props.value}
    name={props.id}
    {...props}
  />
);

Checkbox.propTypes = {
  value: PropTypes.bool,
  id: PropTypes.string,
};

export default makeFormElement(Checkbox);

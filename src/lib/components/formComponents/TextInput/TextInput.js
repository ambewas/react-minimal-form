import React from "react";
import { makeFormElement } from "../../HOC";

const TextInput = (props) => {
  return (
    <input
      type={"text"}
      {...props}
    />
  );
};

export default makeFormElement(TextInput);

import React from "react";
import { makeFormElement } from "../../HOC";

const TextInput = (props) => {
  return (
    <textarea
      {...props}
    />
  );
};

export default makeFormElement(TextInput);

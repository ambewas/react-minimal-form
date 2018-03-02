import React, { Component } from "react";
import PropTypes from "prop-types";
import { set, lensProp } from "ramda";
import { FormContext } from "../../helpers";

class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func,
    formData: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  handleChange = (id, value) => {
    const { formData, onChange } = this.props;
    const idLens = lensProp(id);
    const newFormData = set(idLens, value, formData);

    onChange(newFormData);
  }

  render() {
    const contextObject = {
      formData: this.props.formData,
      onChange: this.handleChange,
    };

    return (
      <FormContext.Provider value={contextObject}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default Form;

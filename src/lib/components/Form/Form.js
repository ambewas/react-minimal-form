import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormContext, ifDo, set } from "../../helpers";

class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
    formData: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  handleChange = (idPath, value) => {
    const { formData, onChange } = this.props;
    const newFormData = { ...formData };

    console.log("idPath", idPath);
    // mutating here, but it's faster.
    set(value, idPath.join("."), newFormData);

    console.log("newFormData", newFormData);
    // console.log("idPath", idPath);
    // newFormData[idPath.join(".")] = value;
    onChange(newFormData);
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;

    e.preventDefault();

    ifDo(onSubmit, this.props.formData);
  }

  render() {
    const { formData, children, className } = this.props;

    const contextObject = {
      formData: formData,
      onChange: this.handleChange,
    };

    return (
      <FormContext.Provider value={contextObject}>
        <form onSubmit={this.handleSubmit} className={className}>{children}</form>
      </FormContext.Provider>
    );
  }
}

export default Form;

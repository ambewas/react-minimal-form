import { Component } from "react";
import PropTypes from "prop-types";
import { set, view, lensProp } from "ramda";

class Form extends Component {
  static childContextTypes = {
    onChange: PropTypes.func,
    getValue: PropTypes.func,
    state: PropTypes.object,
  }

  static propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func,
    formData: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      onChange: this.onChange,
      getValue: this.getValue,
      state: this.props.formData || {},
    };
  }

  getValue = id => {
    const lens = lensProp(id);

    return view(lens, this.props.formData);
  }

  onChange = (id, value) => {
    const { formData } = this.props;

    // make new formData from props, with updated value
    // then pass that along to the parent.
    // TODO -- support deeper state tree
    const idLens = lensProp(id);
    const newFormData = set(idLens, value, formData);

    this.props.onChange(newFormData);
  }

  render() {
    return this.props.children;
  }
}

export default Form;

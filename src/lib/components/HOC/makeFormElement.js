import React, { Component } from "react";
import PropTypes from "prop-types";
import { ifDo, FormContext, shallowDiffers } from "../../helpers";
import { view, lensProp, omit } from "ramda";

const makeFormElement = WrappedComponent => {
  class PureWrappedComponent extends Component { // eslint-disable-line
    static propTypes = {
      id: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      ctx: PropTypes.object,
    };

    shouldComponentUpdate(nextProps) { // eslint-disable-line
      const { ctx, ...propsWithoutContext } = this.props;
      const nextPropsWithoutContext = omit(["ctx"], nextProps);

      // only update if the value we got from the context has actually changed, or if props/state has actually changed
      return shallowDiffers(propsWithoutContext, nextPropsWithoutContext) || ctx.formData[this.props.id] !== nextProps.ctx.formData[nextProps.id];
    }

    handleChange = (e) => {
      const { id, onChange, ctx } = this.props;

      // determine correct value. Checkboxes are a silly exception ¯\_(ツ)_/¯
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

      // internal context change handler sets the values
      ctx.onChange(id, value);

      // handle custom change handlers as well
      ifDo(onChange, id, value);
    }

    getValue = (id) => {
      const { ctx } = this.props;
      const lens = lensProp(id);

      return view(lens, ctx.formData);
    }

    render() {
      const { id } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          value={this.getValue(id)}
          onChange={(e) => this.handleChange(e)}
        />
      );
    }
  }

  return (props) => ( // eslint-disable-line
    <FormContext.Consumer>
      {ctx => (
        <PureWrappedComponent {...props} ctx={ctx}/>
      )}
    </FormContext.Consumer>
  );
};

export default makeFormElement;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { ifDo, FormContext, shallowDiffers, get } from "../../helpers";

const makeFormElement = WrappedComponent => {
  class PureWrappedComponent extends Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      ctx: PropTypes.object,
    };

    shouldComponentUpdate(nextProps) {
      // we dont want shallow to compare the ctx object.
      const { ctx, ...propsWithoutContext } = this.props;
      const nextPropsWithoutContext = { ...nextProps };

      // remove the ctx key
      delete nextPropsWithoutContext.ctx;

      // only update if the value we got from the context has actually changed, or if props/state has actually changed
      return shallowDiffers(propsWithoutContext, nextPropsWithoutContext) || ctx.formData[this.props.id] !== nextProps.ctx.formData[nextProps.id];
    }

    handleChange = (eventOrValue) => {
      const { id, onChange, ctx } = this.props;
      let value = eventOrValue;

      if (eventOrValue && eventOrValue.target) {
        // this is likely an event.
        // determine correct value property. Checkboxes are a silly exception ¯\_(ツ)_/¯
        value = eventOrValue.target.type === "checkbox" ? eventOrValue.target.checked : eventOrValue.target.value;
      }

      // internal context change handler sets the values
      ctx.onChange(id, value);

      // but we handle custom change callbacks as well
      ifDo(onChange, id, value);
    }

    getValue = (id) => {
      const { ctx } = this.props;
      // const value = ctx.formData[id];
      const value = get(ctx.formData, id, "");

      console.log("value", value);
      return value;
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

  return props => ( // eslint-disable-line
    <FormContext.Consumer>
      {ctx => (
        <PureWrappedComponent {...props} ctx={ctx}/>
      )}
    </FormContext.Consumer>
  );
};

export default makeFormElement;

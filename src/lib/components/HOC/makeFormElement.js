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

      if (!ctx) {
        // we're not inside a Form, so no need to take all this into account
        return true;
      }

      const nextPropsWithoutContext = { ...nextProps };

      // remove the ctx key
      delete nextPropsWithoutContext.ctx;

      // only update if the value we got from the context has actually changed, or if props/state has actually changed
      const idPath = this.props.id.split(".");
      const valueCurrent = get(ctx.formData, idPath, "");
      const valueNext = get(nextProps.ctx.formData, idPath, "");

      return shallowDiffers(propsWithoutContext, nextPropsWithoutContext) || valueCurrent !== valueNext;
    }

    handleChange = (eventOrValue) => {
      const { id, onChange, ctx } = this.props;
      let value = eventOrValue;

      if (eventOrValue && eventOrValue.target) {
        // this is likely an event.
        // determine correct value property. Checkboxes are a silly exception ¯\_(ツ)_/¯
        value = eventOrValue.target.type === "checkbox" ? eventOrValue.target.checked : eventOrValue.target.value;
      }

      const idPathArray = id.split(".");

      // internal context change handler sets the values
      ctx.onChange(idPathArray, value);

      // but we handle custom change callbacks as well.
      // note that the id will be the exact one you provided, so can be a dot-separated string
      ifDo(onChange, id, value);
    }

    getValue = (id) => {
      const { ctx } = this.props;
      const idPath = id && id.split(".");

      const value = get(ctx.formData, idPath, "");

      return value;
    }

    render() {
      const { id, ctx } = this.props;

      if (!ctx) {
        // we're not inside a Form, so no need to take all this into account
        return <WrappedComponent {...this.props} />;
      }

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

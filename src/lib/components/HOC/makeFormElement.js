import React, { Component } from "react";
import PropTypes from "prop-types";

const makeFormElement = WrappedComponent => {
  return class DecoratedComponent extends Component { // eslint-disable-line
    static propTypes = {
      id: PropTypes.string,
    };

    static contextTypes = {
      onChange: PropTypes.func,
      getValue: PropTypes.func,
      state: PropTypes.object,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const { id } = this.props;

      // only update if the value has actually changed.
      // TODO -- support for deeper state tree
      return this.context.state[id] !== nextContext.state[id];
    }

    render() {
      const { id } = this.props;

      // just a note for now, to gauge performance
      console.log("in le render");
      return (
        <WrappedComponent
          onChange={(e) => this.context.onChange(id, e.target.value)}
          value={this.context.getValue(id)}
          {...this.props}
        />
      );
    }
  };

};

export default makeFormElement;

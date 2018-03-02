/* eslint-disable no-console */

import React, { Component } from "react";
import { Form, TextInput, TextArea, RadioGroup, Checkbox } from "../lib";

class App extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      // formData can be provided initially, but this is not necessary.
      formData: {
        myTextInput: "an initial value",
        // initially, value "three" is checked in this radiogroup
        firstRadioGroup: "three",
        mycheckbox: true,
      },
    };
  }

  handleChange = formData => {
    this.setState({
      formData,
    });
  }

  render() {
    return (
      <Form
        formData={this.state.formData}
        onChange={this.handleChange}
      >
        <TextInput id="myTextInput" />

        {[...Array(100)].map(i => <TextInput key={i} id="myTextInput2" />)}

        <TextArea disabled={!this.state.enabled} id="myOtherInput" />
        <button onClick={() => this.setState({ enabled: !this.state.enabled })}>enable</button>
        <RadioGroup
          id={"firstRadioGroup"}
          data={[
            // all other domprops work in these objects
            { value: "one", label: "first choice" },
            { value: "two", label: "second choice" },
            { value: "three", label: "third choice" },
          ]}
        />

        <Checkbox id="mycheckbox" />
        <label htmlFor="mycheckbox">checkbox label</label>
      </Form>
    );
  }
}

export default App;


/* eslint-disable no-console */

import React, { Component } from "react";
import { Form, TextInput, TextArea, RadioGroup, Checkbox } from "../lib";
class App extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log("this.state.formData", this.state.formData);
    return (
      <Form
        formData={this.state.formData}
        onChange={this.handleChange}
      >
        <TextInput
          id="myTextInput"
          // all other  domprops work
          onBlur={console.log} // eslint-disable-line
        />

        <TextArea
          id="myOtherInput"
          // custom onchange handler in addition to the value setting things.
          onChange={(id, value) => console.log("my custom onChange", id, value)}
        />
        <RadioGroup
          id={"firstRadioGroup"}
          data={[
            // all other domprops work in these objects
            { value: "one", label: "first choice" },
            { value: "two", label: "second choice" },
            { value: "three", label: "third choice" },
          ]}
        />

        <Checkbox
          id="mycheckbox"
        />
        <label htmlFor="mycheckbox">checkbox label</label>
      </Form>
    );
  }
}

export default App;


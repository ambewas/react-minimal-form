/* eslint-disable no-console */

import React, { Component } from "react";
import { Form, TextInput, TextArea, RadioGroup } from "../lib";
class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        myTextInput: "an initial value",
        myOtherInput: "",
        // initially, value "three" is checked in this radiogroup
        firstRadioGroup: "three",
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
      </Form>
    );
  }
}

export default App;


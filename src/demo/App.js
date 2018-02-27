import React, { Component } from "react";
import { Form, TextInput } from "../lib";
class App extends Component {
  state = {}

  constructor() {
    super();
    this.state = {
      formData: {
        myTextInput: "an initial value",
        myOtherInput: "",
      },
      formData2: {
        myTextInput: "an initial value",
        myOtherInput: "",
      },
    };
  }

  handleChange = formData => {
    this.setState({
      formData,
    });
  }

  handleChange2 = formData2 => {
    this.setState({
      formData2,
    });
  }

  render() {
    return (
      <div>

        <Form
          formData={this.state.formData}
          onChange={this.handleChange}
        >
          <TextInput
            id="myTextInput"
          />
          <TextInput
            id="myOtherInput"
          />
        </Form>

        <Form
          formData={this.state.formData2}
          onChange={this.handleChange2}
        >
          <TextInput
            id="myTextInput"
          />
          <TextInput
            id="myOtherInput"
          />
        </Form>

      </div>
    );
  }
}

export default App;


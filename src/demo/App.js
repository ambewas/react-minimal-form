import React, { Component } from "react";
import { Form, TextInput, TextArea } from "../lib";
class App extends Component {
  state = {}

  constructor() {
    super();
    this.state = {
      formData: {
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

  render() {
    return (
      <div>
        <Form
          formData={this.state.formData}
          onChange={this.handleChange}
        >
          {this.state.formData.myTextInput}
          <TextInput
            id="myTextInput"
          />
          <TextArea
            id="myOtherInput"
          />
        </Form>

      </div>
    );
  }
}

export default App;


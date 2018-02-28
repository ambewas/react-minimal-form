import React, { Component } from "react";
import { Form, TextInput, TextArea } from "../lib";
class App extends Component {
  state = {}

  constructor() {
    super();
    this.state = {
      formData: {
        myTextInput: "an initial value",
        myTextInput2: "an initial value",
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
          <div>
            {this.state.formData.myTextInput}
            <TextInput id="myTextInput" />
          </div>

        </Form>

      </div>
    );
  }
}

export default App;

// <div>
// {this.state.formData.myOtherInput}
// <TextArea
//   id="myOtherInput"
//   onChange={(id, value) => console.log("my custom onChange", id, value)} // eslint-disable-line
// />
// </div>

import React, { Component } from "react";
import { Form, TextInput, TextArea, RadioGroup } from "../lib";
class App extends Component {
  state = {}

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
    console.log("this.state.formData", this.state.formData);
    return (
      <div>
        <Form
          formData={this.state.formData}
          onChange={this.handleChange}
        >
          <div>
            {this.state.formData.myTextInput}
            <TextInput
              id="myTextInput"
              // all other  domprops work
              onBlur={console.log} // eslint-disable-line
            />
          </div>
          <div>
            {this.state.formData.myOtherInput}
            <TextArea
              id="myOtherInput"
              // custom onchange handler in addition to the value setting things.
              onChange={(id, value) => console.log("my custom onChange", id, value)} // eslint-disable-line
            />
          </div>

          <div>
            <RadioGroup
              name="firstRadioGroup"
              id={"firstRadioGroup"}
              data={[
                // all other domprops work in these objects
                { value: "one", label: "first choice" },
                { value: "two", label: "second choice" },
                { value: "three", label: "third choice" },
              ]}
            />
          </div>
        </Form>

      </div>
    );
  }
}

export default App;


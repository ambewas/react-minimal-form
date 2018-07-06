/* eslint-disable no-console */

import React, { Component } from "react";
import { Form, TextInput, TextArea, RadioGroup, Checkbox, Select } from "../lib";
import NumberStepper from "./Number";

import "./app.css";

// generate a bunch of textinputs to gauge performance
const AllTextinputs = [...Array(300)].map((_, i) => <TextInput className="flex-one" key={i} id={`myTextInput${i}`}/>); // eslint-disable-line

class App extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      outsideForm: "",
      // formData can be provided initially, but this is not necessary.
      formData: {
        myTextInput: "an initial value",
        // initially, value "three" is checked in this radiogroup
        firstRadioGroup: "three",
        mycheckbox: true,
        numberstepper: 1,
        address: {
          street: "main street",
          number: 4,
        },
      },
    };
  }

  handleChange = formData => {
    this.setState({
      formData,
    });
  }

  handleLocalChange = (id, value) => console.log("local id and value", id, value)

  render() {
    return (
      <div className="app-container">
        <a className="github-button" href="https://github.com/ambewas" data-size="large" data-show-count="true" aria-label="Follow @ambewas on GitHub">Follow @ambewas</a>
        <a className="github-button" href="https://github.com/ambewas/react-minimal-form" data-size="large" data-show-count="true" aria-label="Fork ambewas/react-minimal-form on GitHub">Fork</a>
        <h1>React-minimal-form</h1>
        <p>Tiny, simple, and fast react forms using the new context API (Provider/Consumer pair). 🚀</p>
        <p>The inputs you get from the package are unstyled. The components used in this demo do have some basic styles applied.</p>
        <p>Install:</p>
        <code>npm i --save react-minimal-form</code>
        <p>This is the form state. It updates in realtime when form elements are filled out.</p>
        <code>{JSON.stringify(this.state.formData)}</code>

        <Form
          formData={this.state.formData}
          onChange={this.handleChange}
          onSubmit={data => console.log("data", data)}
        >
          <h2>A standard text input</h2>
          <TextInput id="myTextInput" />

          <h2>Nested values</h2>
          <TextInput id="address.street" onChange={this.handleLocalChange}/>
          <TextInput id="address.number" />

          <h2>A standard text area, default disabled.</h2>
          <TextArea disabled={!this.state.enabled} id="myOtherInput" />
          <button onClick={() => this.setState({ enabled: !this.state.enabled })}>toggle textarea</button>

          <h2>A select component</h2>
          <Select id="mySelect" data={[{ value: "one", label: "one" }, { value: "two", label: "two" }]} />

          <h2>A radio group</h2>
          <RadioGroup
            id={"firstRadioGroup"}
            data={[
              // all other domprops work in these objects
              { value: "one", label: "first choice" },
              { value: "two", label: "second choice" },
              { value: "three", label: "third choice" },
            ]}
          />

          <h2>A checkbox</h2>
          <Checkbox id="mycheckbox" />
          <label htmlFor="mycheckbox">checkbox label</label>

          <h2>A custom number stepper component</h2>
          <NumberStepper id="numberstepper" />

          <h2>
            {"Here's 300 inputs, still fast."}
            <div className="flex-container flex-wrap">{AllTextinputs}</div>
          </h2>
        </Form>

        {"an input outside of the form should also still work, but you need to provide value and onchange yourself"}
        <TextInput
          value={this.state.outsideForm} onChange={(e) => {
            this.setState({ outsideForm: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default App;

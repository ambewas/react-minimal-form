// TODO -- remove, it's not used anymore for now.

import { EventEmitter } from "events";

const CHANGE_EVENT = "form-context-change";

class formStore extends EventEmitter {
  constructor() {
    super();
    this.state = {};
  }

  addChangeListener = (callback) => {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener = (callback) => {
    this.removeListener(CHANGE_EVENT, callback);
  }

  set = (id, value) => {
    console.log("id, value", id, value);
    this.state[id] = value;
    this.emit(CHANGE_EVENT);
  }

  get = (id) => this.state[id];

  getState = () => this.state;
}

export default formStore;

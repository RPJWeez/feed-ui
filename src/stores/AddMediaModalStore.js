import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class AddMediaModalStore extends EventEmitter {
  constructor() {
    super();
    this.open = false;
  }

  isOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open;
    this.emit("change");
  }

  addMedia(url) {
    //TODO
  }

  handleActions(action) {
    switch (action.type) {
      case "TOGGLE_MODAL":
        this.toggle();
    }
  }
}

const addMediaModalStore = new AddMediaModalStore();
dispatcher.register(addMediaModalStore.handleActions.bind(addMediaModalStore));
export default addMediaModalStore;

import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

class MediaStore extends EventEmitter {
  constructor() {
    super();
    this.open = false;
    this.media = [];
    this.loading = false;
    this.error = false;
  }

  isOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open;
    this.error = false;
    this.loading = false;
    this.emit("change");
  }

  modalOff() {
    this.open = false;
    this.loading = false;
    this.emit("change");
  }

  refreshMedia(newMedia) {
    this.media = newMedia;
    this.emit("change");
  }

  getMedia() {
    return this.media;
  }

  isLoading() {
    return this.loading;
  }

  isError() {
    return this.error;
  }

  handleActions(action) {
    switch (action.type) {
      case "TOGGLE_MODAL":
        this.toggle();
        break;
      case "REFRESH_MEDIA":
        this.refreshMedia(action.newMedia);
        this.modalOff();
        break;
      case "ADD_MEDIA_ERROR":
        this.error = true;
        this.loading = false;
        this.emit("change");
        break;
      case "MEDIA_UPLOADING":
        this.error = false;
        this.loading = true;
        this.emit("change");
        break;
    }
  }
}

const mediaStore = new MediaStore();
dispatcher.register(mediaStore.handleActions.bind(mediaStore));
export default mediaStore;

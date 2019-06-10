import dispatcher from "../dispatcher";
import axios from "axios";

export function toggleModal() {
  dispatcher.dispatch({
    type: "TOGGLE_MODAL"
  });
}

export function getMedia() {
  axios.get("http://localhost:8080/media").then(response => {
    dispatcher.dispatch({
      type: "REFRESH_MEDIA",
      newMedia: response.data
    });
  });
}

export function addMedia(url) {
  axios
    .post("http://localhost:8080/media", JSON.stringify({ url: url }), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      getMedia();
    });
}

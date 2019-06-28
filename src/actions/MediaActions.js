import dispatcher from "../dispatcher";
import axios from "axios";

let API_URL = "https://light-table-api.herokuapp.com";

export function toggleModal() {
  dispatcher.dispatch({
    type: "TOGGLE_MODAL"
  });
}

export function getMedia() {
  axios.get(`${API_URL}/media`).then(response => {
    dispatcher.dispatch({
      type: "REFRESH_MEDIA",
      newMedia: response.data
    });
  });
}

export function deleteMedia(id) {
  axios.delete(`${API_URL}/media/${id}`).then(res => {
    getMedia();
  });
}

export function addMedia(url) {
  dispatcher.dispatch({
    type: "MEDIA_UPLOADING"
  });
  axios
    .post(`${API_URL}/media`, JSON.stringify({ url: url }), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      getMedia();
    })
    .catch(error => {
      dispatcher.dispatch({
        type: "ADD_MEDIA_ERROR"
      });
    });
}

import dispatcher from "../dispatcher";

export function toggleModal() {
  dispatcher.dispatch({
    type: "TOGGLE_MODAL"
  });
}

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddMediaModalStore from "../stores/AddMediaModalStore";
import { toggleModal } from "../actions/MediaModalActions";
export default class AddMediaModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: AddMediaModalStore.isOpen()
    };
  }

  componentWillMount() {
    AddMediaModalStore.on("change", () => {
      this.setState({
        modal: AddMediaModalStore.isOpen()
      });
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Add Media</ModalHeader>
          <ModalBody>asdfasdf</ModalBody>
        </Modal>
      </div>
    );
  }
}

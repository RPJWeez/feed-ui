import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Alert,
  Spinner
} from "reactstrap";
import MediaStore from "../stores/MediaStore";
import { toggleModal, addMedia } from "../actions/MediaActions";

const alertStyle = {
  marginBottom: "5px",
  height: "40px",
  lineHeight: "40px",
  padding: "1px 10px"
};

export default class AddMediaModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: MediaStore.isOpen(),
      postError: false,
      loading: false
    };
  }

  componentWillMount() {
    MediaStore.on("change", () => {
      this.setState({
        modal: MediaStore.isOpen(),
        loading: MediaStore.isLoading(),
        postError: MediaStore.isError()
      });
    });
  }

  submit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    addMedia(data.get("url"));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Add Media</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <Alert
                style={alertStyle}
                isOpen={this.state.postError}
                color="danger"
              >
                Failed to upload image
              </Alert>
              <Input
                type="text"
                id="imageUrlInput"
                name="url"
                placeholder="https://www.example.com/myimage.jpg"
              />
              <div
                class="d-flex align-items-center"
                style={{ marginTop: "5px" }}
              >
                <Button type="submit">Import</Button>
                {this.state.loading && (
                  <Spinner color="primary" size="md" className="mt-10" />
                )}
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

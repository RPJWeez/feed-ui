import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import AddMediaModal from "./AddMediaModal";
import { toggleModal } from "../actions/MediaModalActions";

const headStyle = {
  backgroundColor: "#e6e6e6",
  borderBottom: "1px solid #d9d9d9"
};

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log("PAUL");
  }
  render() {
    return (
      <div>
        {/* <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add Media</ModalHeader>
            <ModalBody>asdfasdf</ModalBody>
          </Modal>
        </div> */}

        <Navbar className="mb-2" style={headStyle} light expand="md">
          <NavbarBrand href="/">feed.io</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">My Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={toggleModal}>
                  Add Media
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

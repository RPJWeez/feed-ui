import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import axios from "axios";
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
  DropdownItem
} from "reactstrap";

const headStyle = {
  backgroundColor: "#e6e6e6",
  borderBottom: "1px solid #d9d9d9"
};

class Head extends Component {
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
  }
  render() {
    return (
      <div>
        <Navbar className="mb-2" style={headStyle} light expand="md">
          <NavbarBrand href="/">feed.io</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">My Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Add Media</NavLink>
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

class Media extends Component {
  render() {
    let isDeletable = false;
    // this.props.item.links.forEach(element => {
    //   if (element.rel === "modify") {
    //     isDeletable = true;
    //   }
    // });
    return (
      <div>
        <img src={this.props.item.url} width={this.props.width} />
        {isDeletable && <Button color="danger">Delete</Button>}
      </div>
    );
  }
}

class TheGrid extends Component {
  state = {
    media: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/media").then(response => {
      const media = response.data;
      this.setState({ media });
    });
  }

  render() {
    return (
      <div>
        <Head />
        <StackGrid columnWidth={this.props.width} monitorImagesLoaded={true}>
          {this.state.media.map(m => (
            <Media item={m} width={this.props.width} />
          ))}
        </StackGrid>
      </div>
    );
  }
}

export default sizeMe()(TheGrid);

import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import axios from "axios";
import TopBar from "./components/TopBar";
import AddMediaModal from "./components/AddMediaModal";
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
        <TopBar />
        <AddMediaModal />
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

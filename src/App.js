import React, { Component } from "react";
import "./App.css";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import MediaStore from "./stores/MediaStore";
import TopBar from "./components/TopBar";
import AddMediaModal from "./components/AddMediaModal";
import { getMedia } from "./actions/MediaActions";
import Media from "./components/Media";

class TheGrid extends Component {
  constructor() {
    super();
    getMedia();
    this.state = {
      media: MediaStore.getMedia()
    };
  }

  componentWillMount() {
    MediaStore.on("change", () => {
      this.setState({
        media: MediaStore.getMedia()
      });
    });
  }

  render() {
    console.log(this.state.media);
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

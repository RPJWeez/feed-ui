import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteMedia } from "../actions/MediaActions";

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    deleteMedia(this.props.item.id);
  }

  render() {
    return (
      <div className="content">
        <div className="content-overlay" />
        <img src={this.props.item.url} width={this.props.width} />
        <div class="content-details fadeIn-bottom">
          <DeleteIcon onClick={this.deleteItem} style={{ color: "FFFAFA" }} />
        </div>
      </div>
    );
  }
}

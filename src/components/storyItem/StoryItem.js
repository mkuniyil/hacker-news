import React, { Component } from "react";
import "./StoryItem.css";

class StoryItem extends Component {
  render() {
    let props = this.props[this.props.id];

    return (
      <div className="storyItem">
        <div className="storyItem__score">{props.score}</div>
        <div className="storyItem__details">
          <div className="storyItem__title">{props.title}</div>
          <div className="storyItem__author">By {props.by}</div>
          <div>Comments</div>
        </div>
      </div>
    );
  }
}

export default StoryItem;

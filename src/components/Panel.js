import React, { Component } from "react";
import StoryItemContainer from "../containers/StoryItemContainer";

class Panel extends Component {
  /**
   * Creates an instance of Panel.
   *
   * @param {Object} props
   * @memberof Panel
   */
  constructor(props) {
    super(props);
    this.props.getNewsFeedIds();
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.items).map((id, index) => {
          return <StoryItemContainer id={id} />;
        })}
      </div>
    );
  }
}

export default Panel;

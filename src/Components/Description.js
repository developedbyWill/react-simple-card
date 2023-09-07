import React, { Component } from "react";

class Description extends Component {
  render() {
    const { text } = this.props;
    return <p className="card-description">{text}</p>;
  }
}

export default Description;

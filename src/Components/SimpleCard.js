import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import TimeAgo from "./TimeAgo"; // Import TimeAgo component
import Location from "./Location"; // Import Location component

class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl, time, location } = this.props;
    return (
      <div className="card">
        <Image imageUrl={imageUrl} />
        <div className="card-content">
          <Title text={title} />
          <Description text={description} />
          <div className="card-info">
            <TimeAgo time={time} />
            <span className="card-separator">·</span>
            <Location location={location} />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;

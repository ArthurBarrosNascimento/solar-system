import React, { Component } from "react";

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props

    return (
      <div data-testid="mission-card">
        <h3 data-testid="mission-name"> { name } </h3>
        <h4 data-testid="mission-year"> { year }</h4>
        <h4 data-testid="mission-country"> { country }</h4>
        <h4 data-testid="mission-destination"> { destination }</h4>
      </div>
    );
  }
}

export default MissionCard;

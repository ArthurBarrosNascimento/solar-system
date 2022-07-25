import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card">
        <h3 data-testid="mission-name">
          {' '}
          { name }
          {' '}
        </h3>
        <span data-testid="mission-year">
          {' '}
          { year }
        </span>
        <span data-testid="mission-country">
          {' '}
          { country }
        </span>
        <span data-testid="mission-destination">
          {' '}
          { destination }
        </span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

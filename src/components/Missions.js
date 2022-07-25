import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map(({ name, year, country, destination }) => (
            // eslint-disable-next-line max-len
            <MissionCard key={ name } name={ name } year={ year } country={ country } destination={ destination } />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;

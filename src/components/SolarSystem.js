import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSysteam extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        <div>
          {Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSysteam;

import React, { Component } from 'react';
import Header from './components/Header';
import SolarSysteam from './components/SolarSystem';
import Missions from './components/Missions';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSysteam />
        <Missions />
      </div>
    );
  }
}

export default App;

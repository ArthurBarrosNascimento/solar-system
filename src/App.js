import React, { Component } from 'react';
import Header from './components/Header';
import SolarSysteam from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSysteam />
      </div>
    );
  }
}

export default App;

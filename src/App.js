import React, { Component } from 'react';
import './App.css';
import CityLocator from './CityLocator/CityLocator';

class App extends Component {
  render() {
    const CITIES = [
      {name: 'London US', latitude: '123', longitude: '789'},
      {name: 'London CA', latitude: '345', longitude: '678'}
    ];

    return (
      <div className="App">
        <CityLocator cities={CITIES} />
      </div>
    );
  }
}

export default App;

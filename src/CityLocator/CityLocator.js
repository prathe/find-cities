import React from 'react';
import CityLocatorSearchBar from './CityLocatorSearchBar';
import CityLocatorTable from './CityLocatorTable';
import CityLocatorMap from './CityLocatorMap';

class CityLocator extends React.Component {
  render() {
    return (
      <div>
        <CityLocatorSearchBar />
        <CityLocatorTable cities={this.props.cities} />
        <CityLocatorMap />
      </div>
    );
  }
}

export default CityLocator;
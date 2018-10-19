import React from 'react';

class CityLocatorTableHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light">
        <tr>
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>      
      </thead>
    );
  }
}

export default CityLocatorTableHeader;
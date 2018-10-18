import React from 'react';

class CityLocatorTableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>
            Nom
          </th>
          <th>
            Latitude
          </th>
          <th>
            Longitude
          </th>
        </tr>      
      </thead>
    );
  }
}

export default CityLocatorTableHeader;
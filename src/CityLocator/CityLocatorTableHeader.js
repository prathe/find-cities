import React from 'react';

class CityLocatorTableHeader extends React.Component {
  render() {
    return (
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
    );
  }
}

export default CityLocatorTableHeader;
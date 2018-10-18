import React from 'react';

class CityLocatorTableRow extends React.Component {
  render() {
    const city = this.props.city;
    return (
      <tr>
        <td>
          {city.city}
        </td>
        <td>
          {city.country}
        </td>
        <td>
          {city.latitude}
        </td>
        <td>
          {city.longitude}
        </td>
      </tr>
    );
  }
}

export default CityLocatorTableRow;
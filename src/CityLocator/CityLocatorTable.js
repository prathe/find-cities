import React from 'react';
import CityLocatorTableHeader from './CityLocatorTableHeader';
import CityLocatorTableRow from './CityLocatorTableRow';

class CityLocatorTable extends React.Component {
  render() {
    const city_locator_table_rows = [];

    this.props.cities.forEach((city) => {
      city_locator_table_rows.push(<CityLocatorTableRow city={city} />);
    });

    return (
      <div>
        <CityLocatorTableHeader />
        <tbody>
          {city_locator_table_rows}
        </tbody>
      </div>
    );
  }
}

export default CityLocatorTable;
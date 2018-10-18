import React from 'react';
import CityLocatorTableHeader from './CityLocatorTableHeader';
import CityLocatorTableRow from './CityLocatorTableRow';

class CityLocatorTable extends React.Component {
  render() {  
    const city_locator_table_rows = [];

    this.props.cities.forEach((city) => {
      city_locator_table_rows.push(<CityLocatorTableRow city={city} />);
    });

    const no_result = (
      <p>If we found a match, it will appear right here...</p>
    )

    const table = (
      <table>
        <CityLocatorTableHeader />
        <tbody>
          {city_locator_table_rows}
        </tbody>
      </table>
    );

    const widget = city_locator_table_rows.length === 0 ? no_result : table

    return (
      <div>
        {widget}
      </div>
    );
  }
}

export default CityLocatorTable;
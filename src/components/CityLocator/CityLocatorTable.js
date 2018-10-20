import React from 'react'
import CityLocatorTableHeader from './CityLocatorTableHeader'
import CityLocatorTableRow from './CityLocatorTableRow'

class CityLocatorTable extends React.Component {
  render() {  
    const city_locator_table_rows = []

    this.props.cities.forEach((city) => {
      city_locator_table_rows.push(<CityLocatorTableRow city={city} />)
    })

    const no_result = (
      <p className="text-secondary p-3">If we find cities, they will appear right here...</p>
    )

    const table = (
      <table className="table table-bordered table-hover">
        <CityLocatorTableHeader />
        <tbody>
          {city_locator_table_rows}
        </tbody>
      </table>
    )

    const widget = city_locator_table_rows.length === 0 ? no_result : table

    return (
      <div>
        {widget}
      </div>
    )
  }
}

export default CityLocatorTable

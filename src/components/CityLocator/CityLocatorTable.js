import React from 'react'
import CityLocatorTableHeader from './CityLocatorTableHeader'
import CityLocatorTableRow from './CityLocatorTableRow'

function CityLocatorTable(props) {
  function renderNoResult() {
    return <p className="text-secondary p-3">If we find cities, they will appear right here...</p>
  }

  function renderTable() {
    return(
      <table className="table table-bordered table-hover">
        <CityLocatorTableHeader />
        <tbody>
          {props.cities.map(city => <CityLocatorTableRow city={city} />)}
        </tbody>
      </table>
    )
  }

  if (props.cities.length > 0) {
    return renderTable()
  } else {
    return renderNoResult()
  }
}

export default CityLocatorTable

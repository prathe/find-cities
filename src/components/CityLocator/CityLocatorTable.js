import React from 'react'
import CityLocatorTableHeader from './CityLocatorTableHeader'
import CityLocatorTableRow from './CityLocatorTableRow'

class CityLocatorTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnSelect = this.handleOnSelect.bind(this)
  }

  // Relay the selected city from the child to the parent
  handleOnSelect(id) {
    this.props.onSelect(id)
  }

  renderNoResult() {
    return <p className="text-secondary p-3">If cities are found, they will appear right here.</p>
  }

  renderTable() {
    return(
      <table className="table table-bordered table-hover">
        <CityLocatorTableHeader />
        <tbody>
          {this.props.cities.map((city, index) =>
            <CityLocatorTableRow
              city={city}
              index={index}
              onSelect={this.handleOnSelect}
            />
          )}
        </tbody>
      </table>
    )
  }

  render() {
    return this.props.cities.length > 0 ? this.renderTable() : this.renderNoResult()
  }
}

export default CityLocatorTable

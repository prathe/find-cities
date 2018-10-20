import React from 'react'
import CityLocatorSearchBar from './CityLocatorSearchBar'
import CityLocatorTable from './CityLocatorTable'
import CityLocatorMap from './CityLocatorMap'
import {lookupCities} from '../DataSource'

class CityLocator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      cities: []
    }

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    this.handleResults = this.handleResults.bind(this)
  }

  handleSearchTextChange(searchText) {
    this.setState({searchText: searchText})

    if(searchText.length === 0) {
      this.setState({cities: []})
    } else if(searchText.length >= 3) {
      lookupCities(searchText, this.handleResults)
    }
  }

  handleResults(results, searchText) {
    if (this.state.searchText === searchText)
      this.setState({cities: results})
  }

  render() {
    return (
      <div>
        <CityLocatorSearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <CityLocatorTable cities={this.state.cities} />
        <CityLocatorMap cities={this.state.cities} />
      </div>
    )
  }
}

export default CityLocator

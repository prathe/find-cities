import React from 'react'
import InputLookup from '../Inputs/Lookup'
import CityLocatorTable from './CityLocatorTable'
import CityLocatorMap from './CityLocatorMap'
import {lookupCities} from '../DataSource'

class CityLocator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      cities: [],
      map_center_coord: null
    }

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    this.handleResults = this.handleResults.bind(this)
    this.handleOnSelectCity = this.handleOnSelectCity.bind(this)
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
    if (this.state.searchText === searchText) {
      const {lat, lng} = results[0] || {}
      this.setState({cities: results, map_center_coord: {lat, lng}})
    }
  }

  // center the map
  handleOnSelectCity(_id) {
    this.setState((state, props) => {
      const {lat, lng} = state.cities.find(({id}) => id === _id)
      return {map_center_coord: {lat, lng}}
    })
  }

  render() {
    return (
      <div>
        <InputLookup
          placeHolder='Search for a city name...'
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />

        <CityLocatorMap
          cities={this.state.cities}
          center={this.state.map_center_coord} />

        <CityLocatorTable
          cities={this.state.cities}
          onSelect={this.handleOnSelectCity}  />
      </div>
    )
  }
}

export default CityLocator

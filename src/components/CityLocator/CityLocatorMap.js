import React from 'react'
import Map from '../GoogleMap/Map'

class CityLocatorMap extends React.Component {
  render() {
    const locations = this.props.cities.map(
      ({lat, lng}) => ({lat, lng})
    )
     
    return (
      <div style={{ height: '800px', width: '100%' }}>
        <Map locations={locations} />
      </div>
    )
  }
}

export default CityLocatorMap

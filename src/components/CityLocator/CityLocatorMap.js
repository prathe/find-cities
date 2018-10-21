import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../GoogleMap/Marker'

class CityLocatorMap extends React.Component {
  render() {
    const defaultCenter = {lat: 46.81228, lng: -71.21454} // Quebec, CA

    let center
    if (this.props.cities.length > 0) {
      const city = this.props.cities[0]
      center = {lat: city.lat, lng: city.lng}
    }
     
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          defaultZoom={5}
          defaultCenter={defaultCenter}
          center={center}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
          onChange={this.handleMapChange}
        >
          {this.props.cities.map(function(city, index) {
            return(
              <Marker
                lat={city.lat}
                lng={city.lng}
                index={index}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default CityLocatorMap

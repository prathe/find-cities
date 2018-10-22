import React from 'react';
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

class Map extends React.Component {
  render() {
    const defaultZoom = 0;
    const defaultCenter = {lat: 0, lng: 0}

    return(
      <GoogleMapReact
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        center={this.props.center}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
      >
        {this.props.locations.map(function(location, index) {
          return(
            <Marker
              lat={location.lat}
              lng={location.lng}
              index={index}
            />
          )
        })}
      </GoogleMapReact>
    )
  }
}

export default Map

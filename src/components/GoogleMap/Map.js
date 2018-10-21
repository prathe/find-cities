import React from 'react';
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Marker from '../GoogleMap/Marker'

class Map extends React.Component {
  render() {
    const defaultCenter = {lat: 0, lng: 0}
    const center = this.props.locations[0]
    const defaultZoom = 0;

    return(
      <GoogleMapReact
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        center={center}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
      >
        {this.props.locations.map(function(location, index) {
          return(
            <Marker
              lat={location.lat}
              lng={location.lng}
              index={index}
              blah={index}
            />
          )
        })}
      </GoogleMapReact>
    )
  }
}

export default Map

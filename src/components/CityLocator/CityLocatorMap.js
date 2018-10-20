import React from 'react'
import GoogleMapReact from 'google-map-react'

function CityLocatorMap(props) {

  const defaultCenter = {lat: 46.81228, lng: -71.21454} // Quebec, CA
  let center
  if (props.cities.length > 0) {
    const city = props.cities[0]
    center = {lat: city.lat, lng: city.lng}
  }

  console.log(defaultCenter)
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultZoom={3}
        defaultCenter={defaultCenter}
        center={center}
        //options={MAP.options}
        //onChange={this.handleMapChange}
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
      />
    </div>
  )
}

export default CityLocatorMap

import React from 'react'
import GoogleMapReact from 'google-map-react'

class CityLocatorMap extends React.Component {
  constructor(props) {
    super(props)
    this.handleMapChange = this.handleMapChange.bind(this)
  }

  handleMapChange() {
    console.log('map changed')
  }

  render() {
    const defaultCenter = {lat: 46.81228, lng: -71.21454} // Quebec, CA
    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let center
    if (this.props.cities.length > 0) {
      const city = this.props.cities[0]
      center = {lat: city.lat, lng: city.lng}
    }
    console.log('center')
    console.log(center)

    const AnyReactComponent = ({ text }) => (
      <div className='marker'>
        <span>{text}</span>
        <img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2.png" />
      </div>
    )
  
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          defaultZoom={5}
          defaultCenter={defaultCenter}
          center={center}
          //options={MAP.options}
          //onChange={this.handleMapChange}
          //yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
          onChange={this.handleMapChange}
        >

        {this.props.cities.map(function(city, i) {
          return(
            <AnyReactComponent
              lat={city.lat}
              lng={city.lng}
              text={labels[i % labels.length]}
            />
          )
        })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default CityLocatorMap

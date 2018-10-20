import React from 'react'

class CityLocatorTableRow extends React.Component {
  render() {
    const {name, lat, lng} = this.props.city

    return (
      <tr>
        <td>{name}</td>
        <td>{lat}</td>
        <td>{lng}</td>
      </tr>
    )
  }
}

export default CityLocatorTableRow

import React from 'react'

class CityLocatorTableRow extends React.Component {
  constructor(props) {
    super(props)
  }

  handleOnClick(id, e) {
    this.props.onSelect(id)
  }

  render() {
    const {id, name, country, lat, lng} = this.props.city

    // binding the function each time it is rendered to also bind the city ID
    const handleOnClick = this.handleOnClick.bind(this, id)

    return (
      <tr onClick={handleOnClick}>
        <td>{name}</td>
        <td>{country}</td>
        <td>{lat}</td>
        <td>{lng}</td>
      </tr>
    )
  }
}

export default CityLocatorTableRow

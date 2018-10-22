import React from 'react'
import styled from 'styled-components';

class CityLocatorTableRow extends React.Component {
  handleOnClick(id, e) {
    this.props.onSelect(id)
  }

  render() {
    const {id, name, country, lat, lng} = this.props.city

    // MUST rebind the handler each time it is rendered to also bind the city ID
    //      which changes when the row changes
    const handleOnClick = this.handleOnClick.bind(this, id)

    // DRY those two lines that are exactly the same as in GoogleMap/Marker
    const marker_labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const marker_text = marker_labels[this.props.index % marker_labels.length]

    const Tr = styled.tr`
      cursor: pointer;
    `

    return (
      <Tr onClick={handleOnClick}>
        <td>{marker_text}</td>
        <td>{name}</td>
        <td>{country}</td>
        <td>{lat}</td>
        <td>{lng}</td>
      </Tr>
    )
  }
}

export default CityLocatorTableRow

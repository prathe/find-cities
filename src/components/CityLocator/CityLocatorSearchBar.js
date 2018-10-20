import React from 'react'

class CityLocatorSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
  }
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value)
  }

  render() {
    const searchText = this.props.searchText

    return (
      <form>
        <input
          type="text"
          placeholder="Search city..."
          value={searchText}
          className="form-control"
          onChange={this.handleSearchTextChange} />
      </form>
    )
  }
}

export default CityLocatorSearchBar

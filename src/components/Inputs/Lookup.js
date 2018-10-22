import React from 'react'

class Lookup extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
  }
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder={this.props.placeHolder}
          value={this.props.searchText}
          className="form-control"
          onChange={this.handleSearchTextChange} />
      </form>
    )
  }
}

export default Lookup

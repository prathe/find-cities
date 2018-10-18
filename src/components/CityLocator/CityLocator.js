import React from 'react';
import CityLocatorSearchBar from './CityLocatorSearchBar';
import CityLocatorTable from './CityLocatorTable';
import CityLocatorMap from './CityLocatorMap';

class CityLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return (
      <div>
        <CityLocatorSearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <CityLocatorTable cities={this.props.cities} />
        <CityLocatorMap />
      </div>
    );
  }
}

export default CityLocator;
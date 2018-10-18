import React from 'react';
import CityLocatorSearchBar from './CityLocatorSearchBar';
import CityLocatorTable from './CityLocatorTable';
import CityLocatorMap from './CityLocatorMap';

class CityLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      cities: []
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({searchText: searchText});

    if(searchText.length === 0) {
      this.setState({cities: []});
    } else if(searchText.length >= 3) {
      this.searchCities(searchText);
    }
  }

  searchCities(text) {
    const url = `https://wft-geo-db.p.mashape.com/v1/geo/cities?namePrefix=${text}&sort=name&offset=0&limit=10`;
    var headers = new Headers();
    headers.append('X-Mashape-Key', process.env.REACT_APP_MASHAPE_KEY);
    const fetch_opt = {headers: headers}
    fetch(url, fetch_opt)
      .then(
        (res) => {
          return res.json();
        }
      )
      .then(
        (res) => {
          // Prevent race conditions.
          // Are the results still relevant to the user?
          // Yes: Typically the user type slower than the request speed or has stop typing.
          // No: The user types fast and may be still typing.
          if (this.state.searchText === text)
            this.setState({cities: res.data});
        }
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <CityLocatorSearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <CityLocatorTable cities={this.state.cities} />
        <CityLocatorMap />
      </div>
    );
  }
}

export default CityLocator;
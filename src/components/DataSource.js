function lookupCities(searchText, callback) {
  const url = `https://wft-geo-db.p.mashape.com/v1/geo/cities?namePrefix=${searchText}&sort=name&offset=0&limit=10`;
  let headers = new Headers();
  headers.append('X-Mashape-Key', process.env.REACT_APP_MASHAPE_KEY);
  const fetch_opt = {headers: headers}
  fetch(url, fetch_opt)
    .then(
      (res) => res.json()
    )
    .then(
      (res) => callback(res.data, searchText)
    )
    .catch((error) => console.log(error));
}

export {lookupCities}
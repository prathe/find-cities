import countries from 'i18n-iso-countries'
countries.registerLocale(require("i18n-iso-countries/langs/en.json"))

function lookupCities(searchText, callback) {
  const url = `https://wft-geo-db.p.mashape.com/v1/geo/cities?namePrefix=${searchText}&sort=name&offset=0&limit=10`
  let headers = new Headers()
  headers.append('X-Mashape-Key', process.env.REACT_APP_MASHAPE_KEY)
  const fetch_opt = {headers: headers}
  fetch(url, fetch_opt)
    .then(res => res.json())
    .then(res => callback(geoDBtoCities(res.data), searchText))
    .catch(error => console.log(error))
}

function geoDBtoCities(arr) {
  return arr.map(
    function({city, countryCode, latitude, longitude}) {
      return {
        id: latitude.toString() + '-' + longitude.toString(),
        name: city,
        country: countries.getName(countryCode, 'en'),
        lat: latitude,
        lng: longitude  
      }
    }
  )
}

export {lookupCities}

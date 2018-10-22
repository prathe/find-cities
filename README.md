## Rendered Component Hierarchy

* CityLocator
  * Inputs/Lookup
  * CityLocatorTable
    * CityLocatorTableHeader
    * CityLocatorTableRow
  * CityLocatorMap
    * GoogleMap/Map
      * GoogleMap/Marker

## API KEYS

Copy `/.env` to `/.env.local` and edit `/.env.local`.

```
REACT_APP_MASHAPE_KEY=YOUR_API_KEY
REACT_APP_GOOGLE_MAPS_API=YOUR_API_KEY

```

## Sreenshots

![1](https://user-images.githubusercontent.com/99786/47276222-95798000-d583-11e8-8e13-05fbb7bd0e58.png)
![2](https://user-images.githubusercontent.com/99786/47276224-96121680-d583-11e8-81d8-20b877ae37cd.png)
![3](https://user-images.githubusercontent.com/99786/47276225-96121680-d583-11e8-8b4e-200b74699e7c.png)

## Some UX Considerations

* What should be the center and the default zoom of the map for such a use case?
* No fuzzy search
* Only city names are searched, country cannot be provided
* Results are displayed below the map to prevent map from moving
* Input and results may have been presented in a sidebar or as a dropdown over the map.
* Clicking a marker does nothing. It should display information about the location.
* Markers may overlap

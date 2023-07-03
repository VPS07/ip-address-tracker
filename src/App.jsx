import { useState, useRef } from 'react'
import Map from './components/Map'
import SearchBar from './components/SearchBar'
import AppContext from './AppContext';

function App() {
  const [center, setCenter] = useState([40.6768, -73.983]);
  const mapRef = useRef(null);

  return (
    <AppContext.Provider value={mapRef}>
      <div className='main__container'>
        <SearchBar setCenter={setCenter} />
        <Map center={center} />
      </div>
    </AppContext.Provider>
  )
}

export default App

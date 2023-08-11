import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import FeaturedHouse from './featuredHouse';
import './App.css';
import SearchResults from './search-results';
import Filter from './filter'
import HouseFromQuery from './House/HouseFromQuery';
import useHouses from './Hooks/useHouses'
import useFeaturedHouses from './Hooks/useFeaturedHouses';
import useHouseContext from './Context/houseContext';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouses(allHouses);

  return (
    <Router>
        <useHouseContext.Provider value={allHouses}>
          <div className='container'>
              <Header subtitle="Providing houses all over the world" />
              <Filter  />
              <Routes>
                  <Route path='/house/:id' element={<HouseFromQuery />} />
                  <Route path='/searchresults/:country' element={<SearchResults />} />
                  <Route path='/' element={<FeaturedHouse house={featuredHouse} />} />
              </Routes>
          </div>
        </useHouseContext.Provider>
    </Router>
  );
}

export default App;

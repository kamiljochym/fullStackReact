import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries';

function App() {

  const [countries, setCountries] = useState([])
  const [countriesToDisplay, setCountriesToDisplay] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        setCountriesToDisplay(response.data)
        console.log(response.data);
        
      })
    
  }, [])

  const handleNewSearch = (event) => {
    const searchName = event.target.value.toLowerCase();

    if (searchName === '') { 
        setCountriesToDisplay(countries)
      return;
    }
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchName))
    setCountriesToDisplay(filteredCountries)
  }

  return (
    <div>
      <h3></h3>

      <Filter handleNewSearch={handleNewSearch}/>

      <DisplayCountries countries={countriesToDisplay}/>
      
    </div>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import axios from 'axios'

const CountryInfo = ({country}) => {

    const api_key = process.env.REACT_APP_API_KEY

    const params = {
        access_key: api_key,
        query: String(country.capital)
    }

    const [weatherInfo, setWeatherInfo] = useState([])


    useEffect(() => {
        axios
          .get('http://api.weatherstack.com/current', {params})
          .then(response => {
            
            setWeatherInfo(response.data)
            console.log(response.data);
            
          })
        
      }, [])

    return (
        <div>
            <h1>{country.name.common}</h1>

            <div>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li> 
                <li>Subregion: {country.subregion}</li>
            </div>


            <div>
                <h2>Languages</h2>
                {Object.values(country.languages).map((language, Idx) => 
                    <li key={Idx}>{language}</li>
                )}
            </div>

            <div>
                <img src={country.flags.png}/>
            </div>

            <div>
                <h3>Weather:</h3>
                {weatherInfo.current ? (
                    <div>
                        <li>Temperature in {country.capital}: {weatherInfo.current.temperature} C</li>
                        <li><img src={weatherInfo.current.weather_icons[0]}/></li>
                        <li>Wind: {weatherInfo.current.wind_speed} mph, {weatherInfo.current.wind_dir} </li>
                    </div>
                ) : (
                    <p>...loading</p>
                )}
            </div>
           
        </div>
    )
}

export default CountryInfo;


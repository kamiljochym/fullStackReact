import React from "react";
import axios from 'axios'

import CountryInfo from "./CountryInfo";

const DisplayCountries = ({countries}) => {

    return (
        <div>  

            {countries.length > 10 ? (

            <div>Too many matches, specify another filter (found: {countries.length})</div>

            ) : countries.length === 0 ? (

            <div>none found</div>

            ) : countries.length === 1 ? (

                <CountryInfo country={countries[0]}/>

            ) : (
                countries.map((country, Idx) => 
                    <div key={Idx}>
                        {country.name.common}
                    </div>
                )
            )}

      
            
        </div>
    )
}



export default DisplayCountries;
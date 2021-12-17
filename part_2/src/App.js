import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/country";

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
      console.log("Promise passed!");

      const countryData = res.data.map(datum => datum)

      setCountries(countryData)

      console.log(process.env.REACT_APP_WEATHER_API_KEY)

    })
  }, [])


  const handleSearch = e => setSearch(e.target.value)

  const filteredResult = countries
    .filter(country => country.name.common
    .toLowerCase()
    .includes(search.toLowerCase()))
    .map((filtered, index) => (
      <Country 
      key={index} 
      name={filtered} 
      capital={filtered} 
      population={filtered} 
      flags={filtered}
      languages={filtered}
    />
    ))

  let sum = ""

  if(filteredResult.length > 0 
    && 
    filteredResult.length < 11) {
    sum = filteredResult
  }
  else if(search === ""){
    sum = ""
  }
  else if(filteredResult.length > 11){
    sum = "Too many matches, specify another query"
  }
  else if(search !== filteredResult){
    sum = "Country not found"
  }

  return(
    <div className="text-blue-600">
      <label>Find countries:</label>
      <input value={search} onChange={handleSearch}/>
      <p>{sum}</p>
    </div>
  )
}

export default App;
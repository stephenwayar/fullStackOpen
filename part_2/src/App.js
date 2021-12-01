import React, { useEffect, useState } from "react";
import Result from "./components/Result.component";
import axios from "axios";

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(res => {
      console.log("Promise passed!");
      const data = res.data.map(datum => (datum.name.common))
      setCountries(data)
    })
  }, [])
  
  const handleSearch = e => setSearch(e.target.value)

  const filteredResult = countries.filter(country => country.toLowerCase().includes(search.toLowerCase())).map((filtered, index) => (<Result key={index} result={filtered}/>))

  let sum = ""

  if(filteredResult.length > 0 && filteredResult.length < 11) {
    sum = filteredResult
  }
  else if(search === ""){
    sum = ""
  }
  else if(filteredResult.length > 11){
    sum = "Too many matches, specify another query"
  }
  else if (search !== filteredResult){
    sum = "Country not found"
  }

  return(
    <div>
      <label>Find countries:</label>
      <input value={search} onChange={handleSearch}/>
      <p>{sum}</p>
    </div>
  )
}
export default App;
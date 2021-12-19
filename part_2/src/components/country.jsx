import React, {useState} from "react";
import "./country.css"
import Weather from "./weather.component";


const Country = ({name, capital, population, flags}) => {

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return(
    <div>
      <p>
        {name.name.common}

        <button onClick={handleClick}>
          {show ? "hide" : "show"}
        </button>
      </p>

      <div className={`${show ? "block" : "hidden"}`}>
        <p>
          <b>Capital: </b>
          {capital.capital}
        </p>

        <p>
          <b>Population: </b>
          {population.population.toString()}
        </p>

        <br/>

        <img 
          width="100px" 
          alt="country flag" 
          src={flags.flags.png}
        /> 

        <Weather 
          capitalCity={capital.capital}
        />
      </div>
    </div>
  )
}
export default Country
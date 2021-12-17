import React, { useEffect, useState } from "react";
import "./country.css"


const Country = ({name, capital, population, flags}) => {

  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
    console.log(show);
  }

  return(
    <div>
      <p>{name.name.common}<button onClick={handleClick}>{show ? "hide" : "show"}</button></p>

      <div className={`${show ? "block" : "hidden"}`}>
        <p><b>Capital: </b>{capital.capital.toString()}</p>
        <p><b>Population: </b>{population.population.toString()}</p>
        <br/>
        <img width="100px" alt="country flag" src={flags.flags.png}/>
      </div>

    </div>
  )
}

export default Country
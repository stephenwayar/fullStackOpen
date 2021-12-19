import React, {useEffect, useState} from "react";
import axios from "axios";

const Weather = ({capitalCity, temperature, wind}) => {

  const [currentWeather, setCurrentWeather] = useState(null)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  useEffect(() => {

    axios

      .get(url)

      .then((res) => {

        console.log("I passed weather API")

        setCurrentWeather(res.data)

        // console.log(res.data)
        
      })

      .catch(err => console.log("WEATHER API CALL FAILED", err))
  }, [url])

  console.log(currentWeather)

  let windSpeed, windDegree, sky, temp 

  if(currentWeather !== null){

    windSpeed = currentWeather.wind.speed

    windDegree = currentWeather.wind.deg

    sky = currentWeather.weather[0].description

    temp = currentWeather.main.temp

  }
  else{
    windSpeed = "Loading..."
  }

  return(
    <div>
      <p>
        <b>Weather in {capitalCity}</b>
      </p>

      <p>
        <b>temparature: </b> {temp} fahrenheit
      </p>

      <p>
        <b>wind speed: </b> {windSpeed} mph
      </p>

      <p>
        <b>wind degree: </b> {windDegree} 
      </p>

      <p>
        <b>sky: </b> {sky} 
      </p>
    </div>
  )
}
export default Weather
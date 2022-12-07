import React from 'react'
import { ClimateProvider } from '../context/ClimateProvider'
import useClimate from '../hooks/useClimate'
const Result = () => {
  const {result} = useClimate()
  const {main, name} = result
  console.log(result);
  const kelvin = 273.15
  return (
    <div className='contenedor'>
      <h2>The weather of {name} is: </h2>
      
      <h3>  {parseInt(main.temp-kelvin)} ºC</h3>
      <p> Temp max: {parseInt(main.temp_max-kelvin)} ºC</p>
      <p> Temp min: {parseInt(main.temp_min-kelvin)}ºC </p>



    </div>
  )
}

export default Result
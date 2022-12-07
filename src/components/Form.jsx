import React, { useState } from 'react'
import useClimate from '../hooks/useClimate'

const Form = () => {
  const {search, dataSearch, manageClimate} = useClimate() 
  const {city, country} = search;
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(search).includes("")){
      setError("All the filds are required")
      return;
    }
    manageClimate(search)
    setError("")

  }



  return (
    <div className='contenedor'>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">City</label>
          <input type="text" id='city' name="city" onChange={dataSearch} value={city} />
        </div>
        <div className="campo">
          <label htmlFor="country">Country</label>
          <select id='country' name='country'  onChange={dataSearch} value={country}>
            <option value=""> Select a country</option>
            <option value="US"> US</option>
            <option value="AR">AR</option>
            <option value="CO"> COL</option>
            <option value="CR"> CR</option>
            <option value="ES"> ES</option>
            <option value="PE"> PE</option>
            <option value="SE"> SWE</option>
            <option value="FI"> FIN</option>
          </select>
        </div>
        <input type="submit" value="Get weather" />
      </form>
    </div>
  )
}

export default Form
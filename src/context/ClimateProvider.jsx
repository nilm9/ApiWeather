import axios from 'axios';
import {useState,createContext} from 'react';
const ClimateContext = createContext()

const ClimateProvider = ({children}) => {
  const [search, setSearch] = useState(
    {
      country: "",
      city: "",
    }
  )
  const [result ,setResult ] =useState({});
  const [noResult, setNoResult] = useState('')
  const [loading, setLoading] = useState(false)


  const dataSearch = e=> {
    //Adding new info
    setSearch({
      ...search,
      [e.target.name]:e.target.value,
    })
  }
  const  manageClimate =async dataSearch => {
    setLoading(true)
    setNoResult('')
    try {
      const {city, country} = dataSearch
      const appId = import.meta.env.VITE_API_KEY
      const url =`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
      console.log(url)
      const {data} = await axios(url)
      const {lat, lon} = data[0]
      const newUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      console.log(newUrl);
      const {data: weather} = await axios(newUrl)
      setResult(weather)
    } catch (error) {
      console.log(error);
      setNoResult('There are no results')
    } finally{
      setTimeout(() => {
        setLoading(false)

      }, 1000);

    }

  }
  
  return (
    <ClimateContext.Provider
      value={{search, dataSearch, manageClimate, result, loading, noResult}}
    >
        {children}
    </ClimateContext.Provider>
  )
}

export {ClimateProvider }
export default ClimateContext
import React from 'react'
import useClimate from '../hooks/useClimate'
import Form from './Form'
import Result from './Result'

const AppClimate = () => {
  const {result} = useClimate()
  return (
    <main className='dos-columnas'>
        <Form/>
        {result &&<Result/>}
        
    </main>
  )
}

export default AppClimate
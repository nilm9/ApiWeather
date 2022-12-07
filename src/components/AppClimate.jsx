import React, { useState } from 'react'
import useClimate from '../hooks/useClimate'
import Form from './Form'
import Result from './Result'
import Spinner from './Spinner'

const AppClimate = () => {
  const {result, loading, noResult} = useClimate()
  return (
    <main className='dos-columnas'>
        <Form/>
        {/* Option unchining: if the propiety doen't exist */}
        {loading ? <Spinner/> :
         result?.name ? <Result/>:
          noResult ? <p>{noResult}</p>:
          <p></p>}
    </main> 
  )
}

export default AppClimate
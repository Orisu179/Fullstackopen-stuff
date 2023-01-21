import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './Filter'
import Countries from './Countries'
const App = () =>{
  const [newInput, setNewInput] = useState('')
  const [countries, setCountries] = useState([])
  let result = countries

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').
    then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  if(newInput !== ''){
    result = countries.filter(country =>
      country.name.toLowerCase().includes(newInput.toLowerCase())
    )
  }

  const handleInputChange = (event) => {
    setNewInput(event.target.value)
  }

  return (
    <div>
      <Filter newInput={newInput} handleInputChange={handleInputChange} />
      <Countries countries={result} />
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const Countries = ({ countries }) => {
  if(countries.length > 10)
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  else if(countries.length === 1) {
    const country = countries[0];

    return (
      <div>
        <h2>{country.name}</h2>

        <p> capital {country.capital} </p>
        <p>area {country.area} </p>

        <b> languages: </b>
        <ul>
          {country.languages.map(language =>
            <li>{language.name}</li>
          )}
        </ul>

        <img src={country.flag} width="128px" height="128px"/>
      </div>
    )
  }


  return (
    <div>
      {countries.map(country =>
        <p key={country.area}>{country.name}</p>
      )}
    </div>
  )
}

export default Countries

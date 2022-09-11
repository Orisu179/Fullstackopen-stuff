import React from 'react'
import { useState } from 'react'

const Persons = ({ result }) => {
  return (
    <div>
      {result.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default Persons

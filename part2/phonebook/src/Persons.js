import React from 'react'
import noteService from './services/noteService'

const Persons = ({ result, persons, setPersons }) => {
  return (
    <div>
      {result.map(person =>
        <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button type='button' onClick={() => {
            if(window.confirm(`Delete ${person.name} ?`)){
              noteService.deleteId(person.id)
                .then(() => {
                  setPersons(persons.filter(per => per.id !== person.id))
                })
            }
          }}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons

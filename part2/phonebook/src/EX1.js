import React from 'react'
import { useState } from 'react'
import Person from './Person'

const App = () => {
  let counter = 4
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newInput, setNewInput] = useState('')
  let result = persons
  if(newInput != '') {
    result = persons.filter(person =>
      person.name.toLowerCase().includes(newInput.toLowerCase())
    )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleInputChange = (event) => {
    setNewInput(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    let dup = false;
    const iterator = persons.keys()

    for(const key of iterator){
      if(persons[key].name === newName){
        alert(`${newName} is already added to the phonebook`)
        dup = true;
      }
    }

    if(!dup){
      const tempName = {
        name: newName,
        number: newNumber,
        id: counter
      }
      setPersons(persons.concat(tempName))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input
          value={newInput}
          onChange={handleInputChange} />
      </div>

      <h2>add a new</h2>
      
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <div> <button type="submit">add</button> </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {result.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App

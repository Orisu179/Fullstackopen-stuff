import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [counter, setCounter] = useState(0)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newInput, setNewInput] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
      setCounter(response.data.length)
    })
  }, [])

  let result = persons
  if(newInput !== '') {
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
      counter++;
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
      <Filter newInput={newInput} handleInputChange={handleInputChange} />
      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons result={result}/>
    </div>
  )
}

export default App

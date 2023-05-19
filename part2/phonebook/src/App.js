import React from 'react'
import { useState, useEffect } from 'react'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'
import noteService from './services/noteService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newInput, setNewInput] = useState('')

  useEffect(() => {
    noteService.getAll()
      .then(inititalNotes => {
        setPersons(inititalNotes)
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
    let dup = false
    const iterator = persons.keys()

    let tempPerson = {
      name: newName,
      number: newNumber,
    }

    for(const key of iterator){
      if(persons[key].name === newName){
        if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
          noteService.update(persons[key].id, tempPerson)
            .then(returnedPerson => {
              setPersons(persons.map(
                person => person.id === returnedPerson.id ? returnedPerson : person))
              setNewName('')
              setNewNumber('')
            })
        }
        dup = true
        continue
      }
    }

    if(!dup){
      noteService.create(tempPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
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

      <Persons 
        result={result}
        persons={persons}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App

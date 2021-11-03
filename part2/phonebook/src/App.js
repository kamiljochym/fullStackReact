import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ personsToDisplay, setPersonsToDisplay ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [notification, setNotification] = useState(null)
  const [isError, setIsError] = useState(false)


  //runs at the beginning
  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        console.log('promise');
        setPersons(persons)
        setPersonsToDisplay(persons)
      })

  }, [])
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = 
      {name: newName,
      number: newNumber}
    

    for (let person of persons) {
      if (person.name === newName) {
        if (window.confirm(`${newName} is already added to phonebook.`)) {
        console.log("already in system");
        personService
          .update(person.id, nameObject)
          .then(updatedPerson => {
            const newPersons = persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)
            setPersons(newPersons)
            setPersonsToDisplay(newPersons)
          })
        }
        return;
      }
    }
    personService
      .create(nameObject)
      .then(person => {
        setIsError(false)
        setNotification(`Added ${person.name}`)
        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(person))
        setPersonsToDisplay(persons.concat(person))
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    
  }

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Are you sure you want to delete ${personToDelete.name}`)) {
      personService
        .remove(personToDelete.id)
        .then(response => {
          const newPersons = persons.filter(person => person.id !== personToDelete.id)
          setPersons(newPersons)
          setPersonsToDisplay(newPersons)
          console.log(newPersons);
        })
        .catch(error => {
          setIsError(true)
          setNotification(`${personToDelete.name} has already been removed`)
          setPersons(persons.filter(n => n.id !== personToDelete.id))
          setPersonsToDisplay(persons.filter(n => n.id !== personToDelete.id))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      }

  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }


  const handleNewSearch = (event) => {
    const searchName = event.target.value.toLowerCase();

    if (searchName === '') { 
      setPersonsToDisplay(persons)
      return;
    }
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName))
    setPersonsToDisplay(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} isError={isError}/>

      <Filter handleNewSearch={handleNewSearch}/>

      <PersonForm newName={newName} newNumber={newNumber} 
                  handleNewName={handleNewName} handleNewNumber={handleNewNumber} 
                  addName={addName}/>

      <h2>Numbers</h2>
  
        <Persons personsToDisplay={personsToDisplay} deletePerson={deletePerson}/>
    
    </div>
  )
}



export default App
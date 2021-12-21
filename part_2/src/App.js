import React, { useEffect } from "react";
import SearchResult from "./components/searchResult.component";
import Person from "./components/person.component";
import { useState } from "react/cjs/react.development";
import personService from "./services/persons"
import axios from "axios";

const App = () => {

  // Hooks

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchResult, setSearchResult] = useState("")
  
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  // Variables

  const personObject = {
    name: newName,
    number: newNumber
  }

  const nameFound = persons.find(person => (person.name.toLowerCase() === newName.toLowerCase()))

  const filteredResult = persons
    .filter(person => (
      person.name
        .toLowerCase()
        .includes(searchResult.toLowerCase())))
        .map(filteredPerson => (
          <SearchResult sResult={filteredPerson.name}/>
        ))

  //Event handlers 

  const handleNameChange = e => setNewName(e.target.value)

  const handleNumberChange = e => setNewNumber(e.target.value)
  
  const handleSearchChange = e => setSearchResult(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    if(newName === ""){
      alert("Name input cannt be empty")
    }
    else if (newNumber === ""){
      alert("Number input cannot be empty")
    }
    else if(nameFound){
      alert(`${newName} already exists`)
    }
    else{
      personService.create(personObject).then(response => {
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const handleDelete = (name, ID) => {
    
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`)

    if(confirm){
      axios
        .delete(`http://localhost:3001/persons/${ID}`)
        .then(() => {

          const filter = persons
            .filter(person => person.id !== ID)
            .map(newPersons => newPersons)

          setPersons(filter)
        })
    }
  }

  return(
    <div>
      <h2>Phonebook</h2>

      <p>Search: 
        <input 
          value={searchResult} 
          onChange={handleSearchChange}
        />
      </p>

      <div>
        {searchResult.length > 0 ? filteredResult : ""}
      </div>

      <form onSubmit={handleSubmit}>

        <div>
          name: <input type="text" value={newName} onChange={handleNameChange}/>
          <br />
          number: <input type="number" value={newNumber} onChange={handleNumberChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      
      {persons.map((person, index) => (
        <Person 
          key={index} 
          person={person}
          handleDelete={() => handleDelete(person.name, person.id)}
        />
      ))}
    </div>
  )
}
export default App;
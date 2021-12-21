import React, { useEffect } from "react";
import SearchResult from "./components/searchResult.component";
import Person from "./components/person.component";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const App = () => {

  const [ persons, setPersons ] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => {
      console.log("Promise passed!");
      setPersons(res.data)
    })
  }, [])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchResult, setSearchResult] = useState("")

  const nameFound = persons
    .find(person => (
      person.name
      .toLowerCase() 
        === 
      newName
      .toLowerCase()
    ))

  const handleNameChange = e => setNewName(e.target.value)

  const handleNumberChange = e => setNewNumber(e.target.value)
  
  const handleSubmit = e => {
    e.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

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
      axios.post("http://localhost:3001/persons", personObject).then(res => {
        setPersons(persons.concat(res.data))
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const handleSearchChange = e => setSearchResult(e.target.value)
  

  const filteredResult = persons
    .filter(person => (
      person.name
      .toLowerCase()
      .includes(searchResult.toLowerCase())))
      .map(filteredPerson => (
        <SearchResult sResult={filteredPerson.name}/>
      ))

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
      
      {persons.map((person, index) => (<Person key={index} name={person.name} number={person.number}/>))}
    </div>
  )
}
export default App;